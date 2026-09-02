function displayMessage() {
    const studentInfo = `
        <div style="
            background-color: #000000;
            padding: 20px;
            margin-top: 20px;
            border-radius: 10px;
            border: 2px solid #2e6285;
            text-align: center;
        ">
            <h2>Student Information</h2>
 
            <p><strong>Name:</strong> Marius Ahron G. Pating</p>
            <p><strong>Program:</strong> Bachelor of Science in Computer Science</p>
            <p><strong>Year Level:</strong> 3rd Year</p>
 
            <hr>
 
            <p><strong>Date & Time:</strong></p>
            <p>${new Date().toLocaleString()}</p>
        </div>
    `;
 
    document.getElementById("studentInfo").innerHTML = studentInfo;
}
 
