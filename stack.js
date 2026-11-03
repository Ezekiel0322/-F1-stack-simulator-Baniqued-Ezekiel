
class Stack {

    constructor() {
        this.items = [];
    }

    // Add a value to the top
    push(element) {
        this.items.push(element);
    }

    // Remove the top value
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.pop();
    }

    // Check the top value
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.items.length - 1];
    }

    // Check if empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the number of values
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}


// Create Stack
const stack = new Stack();


// Connect JavaScript to HTML
$(document).ready(function() {

    // Display the stack
    function displayStack() {

        $("#stack").empty();

        // Display top value first
        for (let i = stack.items.length - 1; i >= 0; i--) {

            const block = $("<div>")
                .addClass("value-block")
                .text(stack.items[i]);

            if (i === stack.items.length - 1) {
                block.addClass("top-item");
            }

            $("#stack").append(block);
        }
    }


    // Display deleted value
    function displayDeleted(value) {

        const block = $("<div>")
            .addClass("value-block deleted-block")
            .text(value);

        $("#deleted").append(block);
    }


    // PUSH BUTTON
    $("#pushBtn").click(function() {

        const value = $("#dataInput").val().trim();

        if (value === "") {
            $("#message").text("Please enter a value first.");
            return;
        }

        stack.push(value);

        $("#dataInput").val("");

        displayStack();

        $("#message").text(value + " was added to the stack.");
    });


    // POP BUTTON
    $("#popBtn").click(function() {

        const removed = stack.pop();

        if (removed === undefined) {
            $("#message").text("The stack is empty. Nothing to pop.");
            return;
        }

        displayDeleted(removed);

        displayStack();

        $("#message").text(removed + " was removed from the stack.");
    });


    // PEEK BUTTON
    $("#peekBtn").click(function() {

        const topValue = stack.peek();

        if (topValue === undefined) {
            $("#message").text("The stack is empty. Nothing to peek.");
            return;
        }

        $(".value-block").removeClass("peek-highlight");

        $("#stack .value-block").first().addClass("peek-highlight");

        $("#message").text("Top value is " + topValue + ". It was not removed.");
    });


    // CLEAR BUTTON
    $("#clearBtn").click(function() {

        stack.clear();

        $("#deleted").empty();

        displayStack();

        $("#message").text("Stack cleared successfully.");
    });

});
