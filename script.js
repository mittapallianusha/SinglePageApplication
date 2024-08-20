/**document.addEventListener("DOMContentLoaded", function() {
    const queryList = document.getElementById("queryList");
    const chatBox = document.getElementById("chatBox");
    const sendButton = document.getElementById("sendButton");
    const userInput = document.getElementById("userInput");

    queryList.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName === "LI") {
            const userQuery = e.target.textContent;
            const botResponse = e.target.getAttribute("data-answer");

            addMessageToChat("You", userQuery);
            addMessageToChat("Bot", botResponse);
        }
    });

    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessageToChat("You", userMessage);
            // Simulate a bot response
            setTimeout(() => {
                addMessageToChat("Bot", "This is a placeholder response.");
            }, 1000);
            userInput.value = "";
        }
    });

    function addMessageToChat(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("mb-2");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
**/
document.addEventListener("DOMContentLoaded", function() {
    const q1 = document.getElementById("q1");
    const q2 = document.getElementById("q2");
    const q3 = document.getElementById("q3");
    const q4 = document.getElementById("q4");
    //const queryText=document.getElementById('queryText');
    //const solutionText=document.getElementById('solutionText');
  
    const chatBot = document.getElementById("chatBot");

    function handleQueryClick(queryTextContent, solutionTextContent) {
        const queryText = document.createElement("p");
        queryText.classList.add('query-block');
        queryText.textContent = queryTextContent;

        const solutionText = document.createElement("p");
        solutionText.classList.add('solution-block');
        solutionText.textContent = solutionTextContent;

        chatBot.appendChild(queryText);
        chatBot.appendChild(solutionText);
    }


    q1.addEventListener('click', function(e) {
        handleQueryClick(e.target.textContent, "Life insurance provides a lump sum to your beneficiaries in the event of your death.");
    });

    q2.addEventListener('click', function(e) {
        handleQueryClick(e.target.textContent, "Car insurance covers damage to your vehicle and liability for injuries and damages caused to others.");
    });

    q3.addEventListener('click', function(e) {
        handleQueryClick(e.target.textContent, "Health insurance helps cover medical expenses, including doctor's visits, hospital stays, and prescriptions.");
    });

    q4.addEventListener('click', function(e) {
        handleQueryClick(e.target.textContent, "Home insurance protects your home and belongings from damage and theft.");
    });
});