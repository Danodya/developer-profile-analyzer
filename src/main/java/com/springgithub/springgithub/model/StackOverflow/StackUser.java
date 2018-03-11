package com.springgithub.springgithub.model.StackOverflow;

public class StackUser {

    private Items[] items;
    private boolean validated;

    public StackUser() {}

    public boolean isValidated() {
        return validated;
    }

    public void setValidated(boolean validated) {
        this.validated = validated;
    }

    public Items[] getItems() {
        return items;
    }

    public void setItems(Items[] items) {
        this.items = items;
    }
}
