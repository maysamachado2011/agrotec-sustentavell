function showInfo(topic) {
  const infoBox = document.getElementById('info-box');
  let content = '';

  switch(topic) {
    case 'agrotech':
      content = 'AgroTech: uso de drones e IA para aumentar produtividade.';
      break;
    case 'reforest':
      content = 'Reflorestamento: recuperação de áreas degradadas.';
      break;
    case 'organic':
      content = 'Orgânicos: cultivo sem químicos.';
      break;
  }

  infoBox.innerHTML = `<p>${content}</p>`;
}

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Mensagem enviada! Obrigado pelo contato.');
  this.reset();
});
