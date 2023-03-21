
export function renderWithTemplate(template, parentElement, data, callback) {
  if (!parentElement) {
    console.error("Parent element not found.");
    return;
  }

  parentElement.insertAdjacentHTML("afterbegin", template); 
  
  //if there is a callback...call it and pass data
  if(callback) {
    callback(data);
  }
}



async function loadTemplate(path) {
    const response = await fetch(path);
  
    if (response.ok) { // if HTTP-status is 200-299 get the response body
      const template = await response.text();
      return template;
    } else {
      alert("HTTP-Error: " + response.status);
    }
}

export async function loadHeaderFooter() {
    // Set paths:
    const headerTemplate = await loadTemplate("snippets/header.html");
    const footerTemplate = await loadTemplate("snippets/footer.html");
    
    // Grab header & footer elements out of the DOM:
    const headerElement = document.getElementById("main-header");
    const footerElement = document.getElementById("main-footer");
    console.log(footerElement);
  
    // Render the header & footer:
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
}