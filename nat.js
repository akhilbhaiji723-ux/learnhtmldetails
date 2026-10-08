const mainDetails = document.querySelectorAll(".main-summary");

mainDetails.forEach(current => {

    current.addEventListener("toggle", function () {

        if (this.open) {

            mainDetails.forEach(other => {

                if (other !== this) {

                    // Dusra main summary close
                    other.removeAttribute("open");

                    // Uske andar ke sabhi child summary close
                    other.querySelectorAll("details").forEach(child => {
                        child.removeAttribute("open");
                    });

                }

            });

        }

    });

});