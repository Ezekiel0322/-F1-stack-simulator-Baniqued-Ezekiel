
class Queue {

    constructor() {
        this.items = [];
    }

    // Add a value to the rear
    enqueue(element) {
        this.items.push(element);
    }

    // Remove the front value
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.shift();
    }

    // Check the front value
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[0];
    }

    // Check the rear value
    rear() {
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

    // Clear the queue
    clear() {
        this.items = [];
    }

}


// Create Queue
const queue = new Queue();


$(document).ready(function() {


    // DISPLAY QUEUE
    function displayQueue() {

        $("#queue").empty();

        // Display from FRONT to REAR
        for (let i = 0; i < queue.items.length; i++) {

            const block = $("<div>")
                .addClass("value-block queue-item");

            const valueLabel = $("<span>")
                .text(queue.items[i]);

            block.append(valueLabel);

            // Identify FRONT
            if (i === 0) {

                block.addClass("front-item");

                block.append(
                    $("<span>")
                        .addClass("position-tag")
                        .text("FRONT")
                );

            }

            // Identify REAR
            if (i === queue.items.length - 1) {

                block.addClass("rear-item");

                block.append(
                    $("<span>")
                        .addClass("position-tag")
                        .text("REAR")
                );

            }

            $("#queue").append(block);

        }


        // Display front and rear values
        if (queue.isEmpty()) {

            $("#queueEnds").text("Front: — | Rear: —");

        } else {

            $("#queueEnds").text(
                "Front: " + queue.peek() +
                " | Rear: " + queue.rear()
            );

        }

    }


    // DISPLAY DELETED VALUE
    function displayDeleted(value) {

        const block = $("<div>")
            .addClass("value-block deleted-block")
            .text(value);

        $("#deleted").append(block);

    }


    // ENQUEUE BUTTON
    $("#enqueueBtn").click(function() {

        const value = $("#dataInput").val().trim();

        if (value === "") {

            $("#message").text("Please enter a value first.");

            return;

        }

        queue.enqueue(value);

        $("#dataInput").val("");

        displayQueue();

        $("#message").text(
            value + " was added to the rear of the queue."
        );

    });


    // DEQUEUE BUTTON
    $("#dequeueBtn").click(function() {

        const removed = queue.dequeue();

        if (removed === undefined) {

            $("#message").text(
                "The queue is empty. Nothing to dequeue."
            );

            return;

        }

        displayDeleted(removed);

        displayQueue();

        $("#message").text(
            removed + " was removed from the front of the queue."
        );

    });


    // PEEK BUTTON
    $("#peekBtn").click(function() {

        const frontValue = queue.peek();

        if (frontValue === undefined) {

            $("#message").text(
                "The queue is empty. Nothing to peek."
            );

            return;

        }

        $(".value-block").removeClass("peek-highlight");

        $("#queue .value-block").first().addClass("peek-highlight");

        $("#message").text(
            "Front value is " + frontValue + ". It was not removed."
        );

    });


    // CLEAR BUTTON
    $("#clearBtn").click(function() {

        queue.clear();

        $("#deleted").empty();

        displayQueue();

        $("#message").text("Queue cleared successfully.");

    });


    // INITIAL DISPLAY
    displayQueue();

});
