const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const saurabh = document.querySelector("#saurabh");
const saurabhContent = document.querySelector("#saurabh-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    // modal: true,
    width: "1000px",
    height: "300px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    width: "600px",
    height: "270px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

saurabh.addEventListener("click", () => {
  const saurabhdetailsBox = new WinBox({
    title: "saurabh details",
    width: "500px",
    height: "300px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: saurabhContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
