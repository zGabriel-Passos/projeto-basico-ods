// Tipos de manutenção com datas disponíveis simuladas (poderiam ser obtidas de um servidor ou banco de dados)
const maintenanceTypes = [
    { type: "Poço", dates: ["2024-07-01", "2024-07-05", "2024-07-10", "2024-07-15"] },
    { type: "Estação de Tratamento", dates: ["2024-07-02", "2024-07-06", "2024-07-11", "2024-07-16"] },
    { type: "Tubulação", dates: ["2024-07-03", "2024-07-07", "2024-07-12", "2024-07-17"] },
    { type: "Bomba d'água", dates: ["2024-07-04", "2024-07-08", "2024-07-13", "2024-07-18"] },
    { type: "Filtro", dates: ["2024-07-09", "2024-07-14", "2024-07-19", "2024-07-20"] }
  ];
  
  document.addEventListener('DOMContentLoaded', function() {
    const maintenanceTypeSelect = document.getElementById('maintenanceType');
    const dateSelect = document.getElementById('date');
    const problemDescriptionTextarea = document.getElementById('problemDescription');
  
    // Preencher select de tipos de manutenção
    maintenanceTypes.forEach(maintenance => {
      const option = document.createElement('option');
      option.value = maintenance.type;
      option.textContent = maintenance.type;
      maintenanceTypeSelect.appendChild(option);
    });
  
    // Atualizar datas disponíveis quando o tipo de manutenção for alterado
    maintenanceTypeSelect.addEventListener('change', function() {
      const selectedMaintenanceType = maintenanceTypeSelect.value;
      const selectedMaintenance = maintenanceTypes.find(maintenance => maintenance.type === selectedMaintenanceType);
  
      // Limpar opções anteriores
      dateSelect.innerHTML = '<option value="">Selecione uma data</option>';
  
      // Adicionar novas datas disponíveis
      selectedMaintenance.dates.forEach(date => {
        const option = document.createElement('option');
        option.value = date;
        option.textContent = new Date(date).toLocaleDateString('pt-BR');
        dateSelect.appendChild(option);
      });
    });
  
    // Evento de envio do formulário de agendamento
    document.getElementById('maintenanceForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const location = document.getElementById('location').value;
      const maintenanceType = maintenanceTypeSelect.value;
      const date = dateSelect.value;
      const problemDescription = problemDescriptionTextarea.value;
  
      // Criar notificação
      const notification = document.createElement('div');
      notification.classList.add('notification');
      let notificationMessage = `<strong>Manutenção Agendada:</strong> ${maintenanceType} em ${location}, para ${new Date(date).toLocaleDateString('pt-BR')}`;
      if (problemDescription) {
        notificationMessage += `<br><strong>Descrição do Problema:</strong> ${problemDescription}`;
      }
      notification.innerHTML = notificationMessage;
  
      // Adicionar notificação ao DOM
      const notificationsContainer = document.getElementById('notifications');
      notificationsContainer.appendChild(notification);
  
      // Limpar formulário
      event.target.reset();
  
      // Simular envio de notificação (apenas para exemplo)
      sendNotification(location, maintenanceType, date, problemDescription);
    });
  
    function sendNotification(location, maintenanceType, date, problemDescription) {
      // Lógica para enviar notificação (pode ser implementado dependendo do contexto real do sistema)
      console.log(`Notificação enviada: Manutenção de ${maintenanceType} em ${location}, para ${new Date(date).toLocaleDateString('pt-BR')}. Problema: ${problemDescription || 'Não especificado'}`);
    }
  });
  