function downloadPDF() {
    // Get the container that holds your form
    const formContainer = document.getElementById("form-container");

    // Ensure that user inputs (text, email, textarea, date) are captured in the snapshot
    const inputs = formContainer.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        if (input.type === "text" || input.type === "email" || input.tagName === "TEXTAREA") {
            input.setAttribute("value", input.value);
        } else if (input.type === "date") {
            input.setAttribute("value", input.value || " ");
        }
    });

    // Use html2canvas to capture the formatted form as a canvas
    html2canvas(formContainer, {
        scale: 2,       // Increase resolution for better quality PDF
        useCORS: true   // Enable cross-origin resource sharing if needed
    }).then(canvas => {
        // Convert the canvas to an image data URL
        const imgData = canvas.toDataURL("image/png");

        // Initialize jsPDF in portrait mode with A4 dimensions
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF("p", "mm", "a4");

        // Calculate image width and height to maintain aspect ratio and fit within A4 width (210mm)
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add the image to the PDF (positioned at x=0, y=10mm to leave a little margin)
        pdf.addImage(imgData, "PNG", 0, 10, imgWidth, imgHeight);

        // Save the PDF file with the given filename
        pdf.save("Employee_Performance_Evaluation.pdf");
    });
}
