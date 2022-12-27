const (Node) => {
    return {
        value: input || null,
        nextNode: null,
        changeValue(newValue) {
            this.value = newValue;
        },
    };
};