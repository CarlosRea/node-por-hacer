
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'elimina un elemento de la lista'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
}

const argv = require('yargs')
                .command('crear','Crear un elemento por hacer',{
                    descripcion
                })
                .command('actualizar','actualiza el estado completo de una tarea',{
                    descripcion,
                    completado
                })
                .command('borrar', 'borra una tarea ', {
                    descripcion
                })
                .help()
                .argv;

module.exports = {
    argv
}