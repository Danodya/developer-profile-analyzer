# Github + Stack + Twitter Profile Analyzer with Angular + Spring

A simple profile analyzer for developers. **You can follow a thorough walkthrough through this application by visiting my series of blogposts starting from [this.](https://dasunpubudu.wordpress.com/2018/01/13/creating-a-github-profile-analyzer-with-spring-boot-angular-part-i-introduction/)**


|        |           |
| ------------- |:-------------:|
| ![Application Screenshot](doc/screenshots/14.png)     | ![Application Screenshot](doc/screenshots/15.png)|
| ![Application Screenshot](doc/screenshots/16.png)    |       |


_Application when ran through my Github profile_.

## Prerequesits

* Angular-CLI installed. ( You can install it by running ``sudo npm install -g @angular/cli`` ).
* JDK (Java Development Kit)
* Node.js  (npm)

## Problem Domain

Given the usernames of stackoverflow, github, twitter and similar sites,
generate a complete insighful view of a particular software develper
(Focus should be on analyzing developers' profiles). All github,
stackoverflow and twitter provide public APIs which can be used to obtain
information. For example, through stackoverflow, we can get popular tags
(java, php, javascript), reputation, most voted questions and etc. Think
ffrom the perspective of a HR manager of a software engineering
company where all the important information of a particular candidate can
be viewed through the application (a web application preferred)
developed.

## Usage

1. Clone the repository using `git clone` (Or any other method i.e. using an IDE) and open the project folder, import the maven dependencies.
2. Enable Auto-import if you are in IntelliJ and if you are in Visual Studio Code, there is a handy plugin which I will state [here](https://marketplace.visualstudio.com/items?itemName=georgewfraser.vscode-javac). It will automatically build the application and import the maven dependencies. You can run the program (backend Tomcat server) using F5 (If you're in Visual Studio Code) or just simply pressing Run button (If you're in Webstorm).
3. Install front end dependencies for Angular by running `npm install` in the `/client` folder.
4. Register an application in Github, Stackexchange, and Twitter and obtain your credentials.

5. Start the front end server by running `ng serve` . Make sure you're in `/client` folder.

6. Create a package called `config` in `com/springgithub/springgithub` directory.

7. Create a `Configuration` class and fill out these data using the credentials you've obtained by registering your application in step 4.

```java
package com.springgithub.springgithub.config;

public class Configuration {
   
   // Github
    public static final String GITHUB_CLIENT_ID = "";
    public static final String GITHUB_CLIENT_SECRET = "";
    public static final String GITHUB_TOKEN = "";
    
    //    Stack Overflow
    public static final String STACK_KEY = "";
    public static String SITE = "stackoverflow";
    
    //    Twitter
    public static final String TWITTER_CONSUMER_KEY = "";
    public static final String TWITTER_CONSUMER_SECRET = "";
    public static final String TWITTER_ACCESS_TOKEN = "";
    public static final String TWITTER_ACCESS_TOKEN_SECRET = "";
}

```

You must get a personal access token from github.

8. Run the backend Tomcat server from IntelliJ.

9. Open the served front end at port `4200` (Default Angular port).

## Techniques

### Validating a Github User

Validating a GitHub user is done through his/her username, via the `GET /getuser/:username` endpoint. It is done via a separate validation procedure made in the `GithubUserValidator` class located in `com.springgithub.springgithub.helpers.github.validators`. 

```java
    public class GithubUserValidator implements ResponseErrorHandler{
    
        private boolean found;  // 404 Error Handler
        private boolean badRequest; // 400 Bad Request
        private boolean unexpected;
    
        public GithubUserValidator() {
            this.found = true;
            this.badRequest = false;
            this.unexpected = false;
        }
    
        @Override
        public boolean hasError(ClientHttpResponse response) throws IOException {
            return RESTUtil.isError(response.getStatusCode());
        }
    
        @Override
        public void handleError(ClientHttpResponse response) throws IOException {
            String responseBody = "";
            if(response != null && response.getBody() != null) {
                responseBody = response.getBody().toString();
            }
            switch (response.getRawStatusCode()) {
                case 200:
                    this.found = true;
                case 404:
                    this.found = false;
                case 400:
                    this.badRequest = true;
                default:
                    this.unexpected = true;
            }
        }
    
        public boolean isFound() {
            return found;
        }
    
        public void setFound(boolean found) {
            this.found = found;
        }
    }

```
An instance of this class is fed into the `RestTemplate` class using the `setErrorHandler()` injector.

* _Note_ : Validations were done only for *Not Found 404* requests. However, same strategy can be implemented for *400* requests as well.

### Returning JSON Responses

```java
// Get a map with <Repository, Commits>
    public Map getCommitsAdaptorRe(String username){

        Map<String, Integer> map = new HashMap<>();

        try {
            GitHubClient client = new GitHubClient();
            client.setOAuth2Token(Configuration.GITHUB_TOKEN);
            RepositoryService repositoryService = new RepositoryService(client);
            CommitService commitService = new CommitService(client);

            List<Repository> repositories = repositoryService.getRepositories(username);
            PageIterator<Repository> pageIterator = repositoryService.pageRepositories(username, 1, 10);

            for (Repository repository: pageIterator.iterator().next()) {
                map.put(repository.getName(), commitService.getCommits(repository).size());
            }
        } catch (IOException e) {
            map.put("NO DATA", 0);
        }

        return map;
    }
```

`Map` class was used to synthesize a JSON response from the data which were acquired and processed using `CustomGithubService` class.

### Model Classes

Model classes are used to store the data (Or _attach_ data) which were acquired from the endpoint. For an example, `User` model will have the same `private` attributes which the JSON response from the `API` has. The model classes also includes `GETTERS` and `SETTERS` which are used to process and synthesize useful kinds of responses in `CustomGithubService` class. The same concept is used in Angular if the JSON response consists of a considerable amount of keys in the Object (So it would easier to be proccesses - if the data needs to be processed in Angular layer as well). 

## Challenges, Issues and Risks

1. **Rate Limit of APIs** – When consuming data from APIs, the web services would not allow more than 100
   responses (At most). Therefore, paginated responses are offered which needs to be iterated through
   Hypermedia Link Relations. Therefore, a loop through responses (A Page Iterator) is needed to be
   employed.
   
2. **Use of Adapters** – To ease the use of paginated responses, third party libraries for the APIs are used. A
   pertaining risk exists if the web services change the API versions drastically which would lead for a need
   to change the codebase of third party libraries, which is needed to be done manually.
   
3. **Time consuming requests** - Consuming some kinds of data (e.g. Commits from Github API) is time
   consuming. This fact is stated in the API Documentation as well. Therefore, "loading spinners" are
   shown until the data are being loaded. To make a better user experience (UX), more data, which does
   not consume a large amount of time to load, are displayed for the user to observe until the timeconsuming operation finishes.
   
4. **Documentation** - Even though some API libraries are very popular among developers, and employed in
   various applications, a lack of official documentation is still present. Therefore, it takes some time to
   understand how the library works.
   
5. **Wrappers** - Since Angular is used at front-end, wrappers for normal JavaScript libraries are used.
   Sometimes these wrappers offer only a subset of the original library (e.g. ng2-charts).


## Acknowledgements

* [Eclipse Software Foundation](http://www.eclipse.org/org/) for their [EGit](https://github.com/eclipse/egit-github/tree/master/org.eclipse.egit.github.core) adapter.
* [Yusuke Yamamoto](https://github.com/yusuke) for his [twitter-4j](https://github.com/yusuke/twitter4j) adapter.
* [Sanjiv Singh](https://github.com/sanjivsingh) for his [stackoverflow-java-sdk](https://github.com/sanjivsingh/stackoverflow-java-sdk) library.
* [Valor Software Foundation](https://valor-software.com/ng2-charts/) for their [ng2-charts](https://github.com/valor-software/ng2-charts) wrapper for _Chart.js_.
* [InfoMediaLtd](https://github.com/InfomediaLtd) for their [angular2-materialize](https://github.com/InfomediaLtd/angular2-materialize) wrapper for MaterializeCSS. 




