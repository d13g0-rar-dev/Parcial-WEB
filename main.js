
  $(document).ready(function() {
    $('#btnAgregar').click(function() {
      var nombre = $('#nombre').val();
      var apellido = $('#apellido').val();
      
      // Creamos una nueva fila con los datos ingresados
      var fila = '<tr><td>' + nombre + '</td><td>' + apellido + '</td></tr>';
      
      // Agregamos la nueva fila al cuerpo de la tabla
      $('#miTabla tbody').append(fila);
      
      // Limpiamos los campos de entrada
      $('#nombre').val('');
      $('#apellido').val('');
    });
  });

