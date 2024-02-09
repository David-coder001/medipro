$(document).ready(function() {
    // Function to send user input to ChatGPT
    function sendMessage(userInput) {
        const apiKey = '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';
        const apiUrl = 'https://api.openai.com/v1/chat/completions';

        // Display user message in chat container
        $("#chat-container").append("<div class='text-right my-8'><span class='bg-gray-300 rounded-lg px-4 py-2'>" + userInput + "</span></div>");
        
        // Send user message to server (assuming you have a backend API endpoint to handle this)
        $.ajax({
            url: apiUrl,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json' // adjust content type as needed
              },
            data: JSON.stringify({ message: [{"role": "user", "content":userInput, "max_tokens": 100 }], model: "gpt-3.5-turbo" }),
            success: function(response) {
                // Display ChatGPT response in chat container
                $("#chat-container").append("<div class='text-left mb-2'><span class='bg-gray-200 rounded-lg px-4 py-2'>" + response.message + "</span></div>");
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    }

    // Handle click event on submit button
    $("#submit-btn").click(function(e) {
        e.preventDefault()
        console.log('Here')

        var userInput = $("#user-input").val();
        if (userInput.trim() !== '') {
            sendMessage(userInput);
            $("#user-input").val('');
        }
    });

    // Handle pressing Enter key in input field
    $("#user-input").keypress(function(event) {
        console.log('Here')
        if (event.which == 13) {
            var userInput = $("#user-input").val();
            if (userInput.trim() !== '') {
                sendMessage(userInput);
                $("#user-input").val('');
            }
        }
    });
});
