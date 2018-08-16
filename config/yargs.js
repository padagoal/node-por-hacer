const opt = {
  descripcion:{
    demand: true,
    alias: 'd'
  }
}

const opt2 = {
  descripcion:{
    demand: true,
    alias: 'd'
  },
  completado:{
    demand:false,
    alias:'c',
    default:true
  }
}

const argv =require('yargs')
.command('actualizar','Actualiza el estado de una tarea',opt2)
.command('crear','Crea el tarea por hacer',opt)
.command('borrar','Borrar una tarea',opt)
.help()
.argv;


module.exports = {
  argv
}
