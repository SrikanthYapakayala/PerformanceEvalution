<script>
    const metrics = [
        {
            title: "1. TECHNICAL KNOWLEDGE",
            details: `
                <b style="margin-right: 5px;">HVAC Systems Understanding:</b> Knowledge of various AC systems, including residential, commercial, and industrial units.
                <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

                <b style="margin-right: 5px;">Diagnostics and Troubleshooting:</b> Ability to diagnose issues accurately using appropriate tools and techniques.
                <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

                <b style="margin-right: 5px;">Electrical Knowledge:</b> Understanding of electrical components and wiring in HVAC systems, including capacitors, relays, and circuit boards.<br><br>
                <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

                <b style="margin-right: 5px;">Refrigeration Knowledge:</b> Familiarity with refrigeration cycles, refrigerants, and their proper handling and charging procedures.
                <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "2. HANDS-ON SKILLS",
            details: `
              <b>Installation Skills:</b> Competence in installing AC units, including proper setup, connections, and system configuration.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Repair Skills:</b> Proficiency in repairing faulty components, including compressors, fans, coils, thermostats, and wiring.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Maintenance Skills:</b> Ability to perform routine maintenance tasks such as cleaning filters, coils, and condensers, checking refrigerant levels, and ensuring system efficiency.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "3. PROBLEM-SOLVING ABILITY",
            details: `
              <b>Diagnosing Complex Issues:</b> Ability to identify and troubleshoot complex mechanical or electrical problems.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Efficient Solutions:</b> Ability to devise practical, cost-effective solutions to fix problems or improve system performance.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Adaptability:</b> Adjusting solutions based on the specific needs of the environment (e.g., residential vs. commercial setups).
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "4. ATTENTION TO DETAIL",
            details: `
              <b>Precision:</b> Ensuring all installations, repairs, and maintenance are completed accurately and to manufacturer specifications.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Safety Compliance:</b> Adhering to safety guidelines and protocols, such as handling refrigerants safely, working with electricity, and ensuring proper ventilation.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "5. CUSTOMER SERVICE SKILLS",
            details: `
              <b>Communication:</b> Explaining technical issues and solutions to customers in an understandable and professional manner.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Professionalism:</b> Maintaining a courteous, friendly, and respectful demeanor when interacting with customers, whether on-site or over the phone.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Customer Education:</b> Offering advice on system maintenance, energy-saving tips, and how to operate AC units properly.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "6. TIME MANAGEMENT",
            details: `
              <b>Efficiency:</b> Completing tasks within the expected time frame, ensuring minimal disruption to the customer’s daily activities.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Prioritization:</b> Managing multiple service calls, balancing urgent repairs with routine maintenance without compromising quality.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "7. KNOWLEDGE OF CODES AND REGULATIONS",
            details: `
              <b>Local Codes and Standards:</b> Knowledge of local, state, and federal regulations regarding HVAC systems, such as installation codes, refrigerant handling, and energy efficiency standards.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Permit Requirements:</b> Understanding when and how to obtain necessary permits for installation or repairs.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "8. PHYSICAL AND MANUAL DEXTERITY",
            details: `
              <b>Physical Stamina:</b> Ability to work in challenging physical environments (e.g., rooftops, basements, attics) and handle heavy equipment.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Precision Handling:</b> Skill in using tools such as wrenches, pressure gauges, thermometers, and soldering tools.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "9. SAFETY AWARENESS",
            details: `
              <b>Workplace Safety:</b> Consistently following safety protocols, such as wearing personal protective equipment (PPE), handling hazardous materials properly, and ensuring workspaces are safe.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Hazard Prevention:</b> Recognizing and mitigating potential safety hazards, such as electrical risks, refrigerant leaks, or improper ventilation.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "10. TROUBLESHOOTING EFFICIENCY",
            details: `
              <b>Speed:</b> The ability to identify problems and fix them quickly, minimizing downtime for the customer.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Comprehensive Troubleshooting:</b> Not only fixing the immediate issue but also identifying any other potential problems or areas for improvement.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "11. QUALITY OF WORK",
            details: `
              <b>Durability of Work:</b> Ensuring repairs and installations are durable, minimizing the need for repeat visits or fixes.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Attention to Detail:</b> Thoroughness in performing repairs and maintenance, ensuring all components are functioning properly.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "12. ADAPTABILITY AND CONTINUED LEARNING",
            details: `
              <b>Staying Current:</b> Keeping up to date with the latest AC technologies, refrigerants, and industry trends.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Certifications:</b> Having relevant certifications such as EPA 608 (for refrigerant handling), NATE (North American Technician Excellence), or HVACR certifications that demonstrate competence and knowledge.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Training and Development:</b> Willingness to participate in ongoing training or workshops to enhance skills and knowledge.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        },
        {
            title: "13. PERFORMANCE METRICS",
            details: `
              <b>Customer Satisfaction:</b> Positive feedback from clients regarding service quality, communication, and reliability.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>First-Time Fix Rate:</b> The percentage of issues resolved on the first visit.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>

              <b>Work Completion Rate:</b> Successful completion of jobs without the need for rework.
              <div style="border-bottom: 1px solid #ddd; margin: 10px 0;"></div>
            `
        }
    ];
    const metricsContainer = document.getElementById("performance-metrics");
    const overallPerformanceText = document.getElementById("overall-performance");

    metrics.forEach((metric, index) => {
        const metricDiv = document.createElement("div");
        metricDiv.classList.add("performance-feedback");

        metricDiv.innerHTML = `
            <div class="metric-title"><b>${metric.title}</b></div>
            <p>${metric.details}</p>

            <div class="feedback-container" data-metric-index="${index}" data-rating="0">
                <div class="star-rating">
                    <span class="star" data-value="1">★</span>
                    <span class="star" data-value="2">★</span>
                    <span class="star" data-value="3">★</span>
                    <span class="star" data-value="4">★</span>
                    <span class="star" data-value="5">★</span>
                </div>
                <span class="feedback-text" id="feedback-desc-${index}">Not Rated</span>
            </div>

            <div style="margin-top: 15px;">
                <label for="comments-${index}"><b>Employee Comments:</b></label>
                <textarea id="comments-${index}" rows="4" placeholder="Enter your comments here..."></textarea>
            </div>
        `;

        metricsContainer.appendChild(metricDiv);
    });

    // Event Delegation for star clicks
    metricsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("star")) {
            const star = event.target;
            const starContainer = star.closest(".feedback-container");
            const metricIndex = starContainer.dataset.metricIndex;
            const selectedValue = star.dataset.value;

            highlightStars(starContainer, selectedValue);
            updateFeedback(metricIndex, selectedValue);
            starContainer.dataset.rating = selectedValue;
            updateOverallPerformance();
        }
    });

    // Function to highlight selected stars
    function highlightStars(starContainer, selectedValue) {
        const stars = starContainer.querySelectorAll(".star");
        stars.forEach(star => {
            const starValue = star.dataset.value;
            star.style.color = starValue <= selectedValue ? "gold" : "gray";
        });
    }

    // Function to update feedback description
    function updateFeedback(index, value) {
        const feedbackDesc = document.getElementById(`feedback-desc-${index}`);

        const descriptions = {
            "1": "Poor Performance",
            "2": "Average Performance - Needs Improvement",
            "3": "Good Performance",
            "4": "Very Good Performance",
            "5": "Excellent Performance"
        };

        feedbackDesc.textContent = descriptions[value] || "Not Rated";
    }
     // Function to update overall performance (calculates only when all 13 are rated)
    function updateOverallPerformance() {
        const starContainers = metricsContainer.querySelectorAll(".feedback-container");
        const ratings = Array.from(starContainers, container => {
            return parseInt(container.dataset.rating) || 0;
        }).filter(rating => rating > 0);

        if (ratings.length === 13) { // Check if all 13 metrics are rated
            const average = ratings.reduce((a, b) => a + b, 0) / ratings.length;
            const roundedAverage = Math.round(average);
            const descriptions = {
                1: "Poor Performance",
                2: "Average Performance - Needs Improvement",
                3: "Good Performance",
                4: "Very Good Performance",
                5: "Excellent Performance"
            };
            overallPerformanceText.textContent = descriptions[roundedAverage] || "Not Rated";
        } else {
            overallPerformanceText.textContent = "Please rate all 13 metrics.";
        }
    }

    function downloadPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const content = document.querySelector('.container');

        html2canvas(content, { scale: 2 }).then(canvas => { // Added scale: 2
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            doc.save('Employee_Performance_Evaluation.pdf');
        }).catch(error => {
            console.error('Error capturing content:', error);
        });
    }
</script>