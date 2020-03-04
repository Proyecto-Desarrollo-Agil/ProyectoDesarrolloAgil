// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "89353480-ec80-11e1-aff1-0800200c9a66"; // GEnerado por http://www.famkruithof.net/uuid/uuidgen

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

// En modo depuración, que no haya efectos de jquery
jQuery.fx.off=false

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
				"<h1>Oficina</h1>\
				<p>Otro día en el descanso para la comida en la oficina.</p>",
				{
	        enter: function(character, system, from) {
	            system.doLink('casaseiltos');
	        }

				}
		),
		
		casaseiltos: new undum.SimpleSituation (
				"<p>Te encuentras en el descanso para la hora de comer en tu oficina privada cuando de repente comienza a sonar el teléfono. Estás muy entretenido poniendote al día de lo que ha ocurrido en el mundo mientras trabajabas mirando el Facebook y puedes decidir entre <a href='atender'>atender la llamada</a> o <a href='nocogerlo'>no cogerlo</a> y seguir viendo las redes sociales.</p>"
		),
		atender: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/detective.jpg'>\
			<p>Una vez has cogido el teléfono te das cuenta de que no es un caso corriente, quien realizaba la llamada era Elodín, director del hotel Redfern. Como supondréis no ha llamado para invitarme a pasar unos dias de vacaciones en su lujoso hotel, sino que ha ocurrido un asesinato.</p>\
			<p>Para entrar mas en detalle decides prepararte y <a href='hotel'>ponerte en camino hacia el hotel</a> para resolver este sorprendente asesinato, ¿Quién querría matar a alguien en el hotel con mayor prestigio de la ciudad?</p>/"
		),
		nocogerlo: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/mirandoelmovil.jpg'>\
<p>El teléfono suena y suena mientras tú sigues 'poniendote al día en las redes' hasta que a la media hora para. A las dos horas recibes una visita a tu oficina, y piensas..¿Quién viene un domingo a las 16:30? Abres la puerta y te encuentras con que para tu sorpresa es Elodín, director del hotel Redfern, y no me visitaba para regalarme una estancia en su hotel por mi trabajo, eso habría querido yo jejejejeje. Tras hablar con él, me cuenta que ha habido un asesinato y nos disponemos a <a href='hotel'>ir al hotel</a>y una vez allí detallar en profundidad sobre lo ocurrido.</p>"
		),
		
		hotel: new undum.SimpleSituation(
			"<h1>HOTEL</h1>\
			<img class='img-situation' src='./media/Imagenes/hotel.jpg'>\
<p>Una vez, hemos llegado al hotel, nos disponemos a salir del taxi, que tenía cierto olor a cuadra, y te encuentras que la escena no tiene ese ambiente morboso típico de los asesinatos misteriosos.</p>\
<p>Junto con Elodín, atraviesas el rellano y el restaurante del Redfern hasta llegar a un pequeño pasillo que conecta con la cocina al fondo. Te acercas al grupito formado por los empleados del hotel en medio del pasillo. Algunos de ellos están conmocionados. Jade, la limpiadora, llora desconsoladamente de espaldas al resto, tapándose la cara con las manos.</p>\
<p>De manera instintiva, comienzas a analizar la escena con una prolijidad solo equiparable a tu experiencia. Te abres paso entre los presentes y observas que hay un cuerpo inerte, boca arriba. Tiene una posición extraña, casi cómica. El cuello estaba torcido en un ángulo extraño.</p>\
<img class='img-situation' src='./media/Imagenes/asesinado.jpg'>\
<p>Como te había explicado el director minutos antes, la víctima es el cocinero del hotel, Bentley. Comienzas por interrogar a los empleados <a href='jim'>Jim</a>, <a href='antoine'>Antoine</a> y <a href='camarero'>El camarero</a>.</p>/"
		),

		jim: new undum.SimpleSituation(
"<p>Jim, el botones, no sabe nada de lo sucedido. Llegó corriendo al pasillo cuando oyó un grito aterrador de Bast. Casi se cae al escurrirse con una mancha de un líquido viscoso en el suelo.</p>/"
		),

		antoine: new undum.SimpleSituation(
"<p>Antoine, el maître parece más contrariado por el retraso que suponía el no tener cocinero que el hecho de que haya muerto. Para una vez que Bast no había llegado tarde a su turno, no habían podido dejar listo el restaurante a tiempo para la hora de la comida.</p>/"
		),
		

};


// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
   
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
   
};
