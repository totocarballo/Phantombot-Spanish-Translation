$.lang.register('pointsystem.add.all.success', '$1 se han enviado a todos en este canal!');
$.lang.register('pointsystem.add.all.usage', 'Uso: !points all [cantidad]');
$.lang.register('pointsystem.take.all.success', '$1 se han removido a todos en este canal!');
$.lang.register('pointsystem.take.all.usage', 'Uso: !points takeall [cantidad]');
$.lang.register('pointsystem.add.error.negative', 'No puedes dar $1 negativos.');
$.lang.register('pointsystem.take.error.negative', 'No puedes sacar $1 negativos.');
$.lang.register('pointsystem.add.success', 'Envio $1 a $2. El nuevo balance es $3.');
$.lang.register('pointsystem.add.usage', 'Uso: !points add [nombre] [cantidad]');
$.lang.register('pointsystem.user.success', ' $1 actualmente es $2.');
$.lang.register('pointsystem.makeitrain.error.invalid', 'Lo siento, pero no es posible que lluvan $1 en este momento.');
$.lang.register('pointsystem.makeitrain.error.needpoints', 'No puedes permitir que llueva $1.');
$.lang.register('pointsystem.makeitrain.error.negative', 'No puedes hacer que llueva $1 negativos.');
$.lang.register('pointsystem.makeitrain.success', 'Tormenta cercana! $1 solo arrojo un total de $2 $3 en el aire!');
$.lang.register('pointsystem.makeitrain.usage', 'Uso: !makeitrain [cantidad]');
$.lang.register('pointsystem.set.bonus.error.negative', 'No puedes ajustar la bonificación por nivel grupal a 1 negativos.');
$.lang.register('pointsystem.set.bonus.success', 'Ajustado el $1 bonus a $2 por nivel de grupo.');
$.lang.register('pointsystem.set.bonus.usage', 'Uso: !points bonus [cantidad]');
$.lang.register('pointsystem.set.gain.error.negative', 'No puede ajustar la cantidad de $1 ganado a un numero negativo.');
$.lang.register('pointsystem.set.gain.offline.success', 'Ajustado el $1 ganados para $2 cada $3 minuto(s) mientras que el directo este activo.');
$.lang.register('pointsystem.set.gain.offline.usage', 'Uso: !points setofflinegain [cantidad], si tienes !permissionpoints puesto, anulara esto!');
$.lang.register('pointsystem.set.gain.success', 'Ajustado el $1 ganadas para $2 cada $3 minuto(s) mientras que el directo no este activo.');
$.lang.register('pointsystem.set.gain.usage', 'Uso: !points setgain [cantidad], si tienes !permissionpoints puesto, anulara esto!');
$.lang.register('pointsystem.set.interval.error.negative', 'No puedes ajustar el $1 intervalo de pago a minutos negativos.');
$.lang.register('pointsystem.set.interval.offline.success', 'Ajustado el $1 intervalo de pago a $2 minuto(s) mientras que el directo no este activo.');
$.lang.register('pointsystem.set.interval.offline.usage', 'Uso: !points setofflineinterval [cantidad]');
$.lang.register('pointsystem.set.interval.success', 'Ajustado el $1 intervalo de pago a $2 minuto(s) mientras que el directo este activo.');
$.lang.register('pointsystem.set.interval.usage', 'Uso: !points setinterval [cantidad]');
$.lang.register('pointsystem.set.name.both.success', 'El nombre de los puntos ahora se ha cambiado de "$1" a "$2". Ajuste el nombre para un solo $2 usando !points setname single [nombre].');
$.lang.register('pointsystem.set.name.multiple.success', 'El nombre de varios puntos ahora se ha cambiado de "$1" a "$2". Ajuste el nombre para un solo $2 usando !points setname single [nombre].');
$.lang.register('pointsystem.set.name.single.success', 'El nombre de un punto ahora se ha cambiado de "$1" a "$2". Ajuste el nombre para varios $2 usando !points setname multiple [nombre].');
$.lang.register('pointsystem.set.name.usage', 'Uso: !points setname [single | multiple | delete] [nombre]. Ajuste el nombre de un unico o de multiple puntos para los puntos de chat o elimina los valores.');
$.lang.register('pointsystem.set.name.delete', 'Removido los nombres personalizados a los puntos.');
$.lang.register('pointsystem.set.name.duplicate', 'Ese es el nombre actual del comando de punto personalizado.');
$.lang.register('pointsystem.setbalance.error.negative', 'No puede ajustar un balance negativo $1.');
$.lang.register('pointsystem.setbalance.success', 'Ajustado el $1 balance a $2 de $3.');
$.lang.register('pointsystem.setbalance.usage', 'Uso: !points set [nombre] [cantidad]');
$.lang.register('pointsystem.take.error.toomuch', 'No puedes tomar mas de lo que $1 tiene en $2.');
$.lang.register('pointsystem.take.success', 'Tomados $1 de $2. El nuevo balance es $3.');
$.lang.register('pointsystem.take.usage', 'Uso: !points take [nombre] [cantidad]');
$.lang.register('pointsystem.gift.usage', 'Uso: !gift [usuario] [cantidad]');
$.lang.register('pointsystem.gift.shortpoints', 'Lo siento! ¡No tienes suficientes puntos para enviar ese regalo!');
$.lang.register('pointsystem.gift.404', 'Lo siento! Ese usuario no parece estar registrado en el chat todavía!');
$.lang.register('pointsystem.gift.success', '$1 ha enviado un regalo de $2 a $3.');
$.lang.register('pointsystem.usage.invalid', 'La opción invalida paso al comando $1');
$.lang.register('pointsystem.err.negative', 'No puedes regalar menos que 0 $1');
$.lang.register('pointsystem.err.penalty', 'Uso: !penalty (usuario) (tiempo en minutos)');
$.lang.register('pointsystem.penalty.set', 'Usuario: $1 no ganara puntos para la proxima $2.');
$.lang.register('pointsystem.reset.all', 'Todos los puntos fueron borrados.');
$.lang.register('pointsystem.message.usage', 'Uso: !points setmessage [mensaje] - Tags: (prefijo de usuario), (usuario), (puntos), (nombre de los puntos), (cadena de puntos), (tiempo), y (rango)');
$.lang.register('pointsystem.message.set', 'Ajustado el mensaje de puntos a: $1');
$.lang.register('pointsystem.active.bonus.usage', 'Uso: !points setactivebonus [cantidad]');
$.lang.register('pointsystem.active.bonus.set', 'Ajustado el bonus activo a $1');
$.lang.register('pointsystem.bonus.usage', 'Uso: !points bonus (cantidad) (por tiempo)');
$.lang.register('pointsystem.bonus.say', 'Durante las siguientes $1 voy a estar dando $2 extra $3 a cada pago!');