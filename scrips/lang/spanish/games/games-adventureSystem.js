$.lang.register('adventuresystem.adventure.usage', 'Uso: !adventure [$1].');
$.lang.register('adventuresystem.alreadyjoined', 'Ya te has unido a la aventura!');
$.lang.register('adventuresystem.completed', 'La aventura termino! Los supervivientes son: $1.');
$.lang.register('adventuresystem.completed.no.win', 'La aventura termino! No hay supervivientes.');
$.lang.register('adventuresystem.completed.win.total', 'La aventura termino con $1 superviviente(s) y $2 muerte(s).');
$.lang.register('adventuresystem.join.bettoohigh', 'No puedes entrar con $1, el maximo es $2.');
$.lang.register('adventuresystem.join.bettoolow', 'No puedes entrar con $1, el minimo es $2.');
$.lang.register('adventuresystem.join.needpoints', 'No puedes entrar con $1, solo tienes $2.');
$.lang.register('adventuresystem.join.notpossible', 'No puedes entrar ahora.');
$.lang.register('adventuresystem.join.success', 'Entraste a la aventura con $1!');
$.lang.register('adventuresystem.loaded', 'Historias de aventura cargadas (encontradas $1).');
$.lang.register('adventuresystem.payoutwhisper', 'Aventura completada, $1 + $2 se han añadido a tu balance.');
$.lang.register('adventuresystem.runstory', 'Comenzando aventura "$1" con $2 jugador(es).');
$.lang.register('adventuresystem.set.success', 'Ajusta $1 a $2.');
$.lang.register('adventuresystem.set.usage', 'Uso: !adventure set [nombre de la configuracion] [valor].');
$.lang.register('adventuresystem.start.success', '$1 esta tratando de conseguir un equipo para una aventura de negocios serios! Usa "!adventure [$2]" para ingresar!');
$.lang.register('adventuresystem.tamagotchijoined', '$1 tambien se está uniendo a la aventura.');
$.lang.register('adventuresystem.top5', 'El top 5 Aventureros son: $1.');
$.lang.register('adventuresystem.top5.empty', 'No se han registrado ganadores de aventuras todavia.');
$.lang.register('adventuresystem.reset', 'La aventura ha sido reiniciada! Usa "!adventure [$1]" para comenzar una nueva aventura!');


$.lang.register('adventuresystem.stories.1.title', 'Hora de atracos');
$.lang.register('adventuresystem.stories.1.chapter.1', 'Tu memoria es vaga, en la mesa un pequeño portátil que esta reproduciendo un video: "Mi nombre es El Arquitecto. El banco de Karabraxos es el banco mas seguro del universo. Robarán el banco de Karabraxos!"');
$.lang.register('adventuresystem.stories.1.chapter.2', 'Incapaces de dejar sus mentes en blanco, (caught) lentamentente sienten como sus mentes estan siendo dreanadas, como El Delator se alimenta de sus pensamientos.');
$.lang.register('adventuresystem.stories.1.chapter.3', 'Nos encontramos de vuelta en la habitación y empezamos en la conciencia de (survivors) poco a poco se desvanece de nuevo, solo para despertar en nuestras camas como nada en absoluto ha sucedido.');

$.lang.register('adventuresystem.stories.2.title', 'Trampa para osos');
$.lang.register('adventuresystem.stories.2.chapter.1', '¡Amigos! Tengo las coordenadas de un escondite secreto con tesoros escondidos dentro de las entrañas del bosque elfo. ¡Debemos prepararnos e ir a por ellos!');
$.lang.register('adventuresystem.stories.2.chapter.2', 'Cuidado! Trampas para osos! (caught) tiene sus piernas cortadas!');
$.lang.register('adventuresystem.stories.2.chapter.3', 'Fiuuu, esa fue una llamada cercana para perder una pierna. Pero te has merecido esto (survivors)!');

$.lang.register('adventuresystem.stories.3.title', 'Vampiros?!');
$.lang.register('adventuresystem.stories.3.chapter.1', 'Ah, mis queridos amigos! Puedo haber encontrado la aventura de toda una vida. A saber, la casa del conde Dracula se cree que esta el Rey de los Vampiros! Vamos ahora!');
$.lang.register('adventuresystem.stories.3.chapter.2', 'Es el! (caught) fue asesinado violentamente!');
$.lang.register('adventuresystem.stories.3.chapter.3', 'Eso estuvo cerca, no creo que me hayan mordido. Tu? Bueno, (survivors), aqui esta tu parte! ~ Se transforma en murcielago y se aleja volando ~');

$.lang.register('adventuresystem.stories.4.title', 'Cereal');
$.lang.register('adventuresystem.stories.4.chapter.1', 'Creo que tenemos un hilo mucho mas grande en nuestras manos que cavar... Es mitad hombre, medio oso, medio cerdo ... No te rias, soy SUPER CEREAL!');
$.lang.register('adventuresystem.stories.4.chapter.2', '/me A medida que los aventureros se abren paso a traves de los tuneles, escuchan un ruido suave detrás de ellos...');
$.lang.register('adventuresystem.stories.4.chapter.3', 'Mira! Es el hombre cerdoso! (caught) es arrastrado a la oscuridad.');
$.lang.register('adventuresystem.stories.4.chapter.4', '(survivors) huyo. Vamos a salir de aqui chicos! No podemos lidiar con esto solos.');


/*
 * Rules on writing your own adventure story:
 *
 * - Stories are automatically loaded from this file by their sequence number (adventuresystem.stories.[This number]).
 * - Keep the format of your story as shown above.
 * - There can be an unlimited number of stories, IF you keep their subsequence numbers 1, 2, 3, 4, 5...
 * - A story must have a title.
 * - A story can have an unlimited number of chapters, IF you keep their subsequence numbers 1, 2, 3, 4, 5...
 * - Stories are picked at random.
 *
 ** Game specific story how-to. You also need to make sure that you at least have ONE story that doesn't require a specific game.
 ** Please make sure that your story number also follow along. What I mean by that is it needs to start from 1 and go up. Same with the chapters.
 * - Add $.lang.register('adventuresystem.stories.NUMBER.game', 'GAME NAME IN LOWER CASE'); on top of the story chapter.

 * Example >
 * $.lang.register('adventuresystem.stories.5.game', 'programming');
 * $.lang.register('adventuresystem.stories.5.title', 'Talk Shows');
 * $.lang.register('adventuresystem.stories.5.chapter.1', 'random story...');
 *
 * Underneath is a template for your first custom story, just remove the preceding slashes.
 */

//$.lang.register('adventuresystem.stories.5.title', '');
//$.lang.register('adventuresystem.stories.5.chapter.1', '');
//$.lang.register('adventuresystem.stories.5.chapter.2', '');
//$.lang.register('adventuresystem.stories.5.chapter.3', '');
