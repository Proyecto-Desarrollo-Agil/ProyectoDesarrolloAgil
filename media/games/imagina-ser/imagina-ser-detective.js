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
	            system.doLink('oficinaselitos');
	        }

				}
		),
		
	oficinaselitos: new undum.SimpleSituation (
			"<p>Te encuentras en el descanso para la hora de comer en tu oficina privada cuando de repente \
			comienza a sonar el teléfono. Estás muy entretenido poniendote al día de lo que ha ocurrido en el \
			mundo mientras trabajabas mirando el Facebook y puedes decidir entre <a href='./atender'>atender \
			</a> o <a href='./noatender'>no atender</a> la llamada y seguir viendo las redes sociales.</p>",
			{
				actions: {
					"atender": "<img class='img-situation' src='./media/Imagenes/detective.jpg'>\
					<p>Una vez has cogido el teléfono te das cuenta de que no es un caso corriente. AL otro lado \
					del teléfono se encontraba Elodín, director del hotel Redfern. Como supondréis no ha \
					llamado para invitarme a pasar unos dias de vacaciones en su lujoso hotel, sino que ha \
					ocurrido un asesinato.</p> <p>Elodín te ha pedido que acudas cuanto antes. Decides prepararte y \
					<a href='pasillohotel'>ponerte en camino hacia el hotel</a> para resolver este sorprendente \
					caso. ¿Quién querría matar a alguien en el hotel con mayor prestigio de la ciudad?</p>/",

					"noatender": "<img class='img-situation' src='./media/Imagenes/mirandoelmovil.jpg'>\
					<p>El teléfono no para de sonar mientras tú sigues 'poniendote al día en las redes' hasta que, \
					a la media hora, para. Al rato, un par de golpes secos en la puerta te sacan de tu ensimismamiento \
					y mientras te levantas para abrir, piensas: ¿Quién viene un domingo a las 3 de la tarde? Abres \
					la puerta y te encuentras con que, para tu sorpresa, es Elodín, director del hotel Redfern, y no \
					me visitaba para regalarme una estancia en su hotel por mi trabajo. En su cara se refleja una \
					palidez propia de la desesperación más profunda… Tras hablar con él, me cuenta que ha habido un \
					asesinato y nos disponemos a <a href='pasillohotel'>ir al hotel</a> y una vez allí detallar en \
					profundidad sobre lo ocurrido.</p>"
				}
			}
	),
	
	pasillohotel: new undum.SimpleSituation(
		"<h1>HOTEL</h1>\
		<img class='img-situation' src='./media/Imagenes/hotel.jpg'>\
		<p>Una vez, hemos llegado al hotel, nos disponemos a salir del taxi, que tenía cierto olor a cuadra, \
		y te encuentras que la escena no tiene ese ambiente morboso típico de los asesinatos misteriosos.</p>\
		<p>Junto con Elodín, atraviesas el rellano y el restaurante del Redfern hasta llegar a un pequeño pasillo \
		que conecta con la cocina al fondo. Te acercas al grupito formado por los empleados del hotel en medio del \
		pasillo. Algunos de ellos están conmocionados. Jade, la limpiadora, llora desconsoladamente de espaldas al \
		resto, tapándose la cara con las manos.</p>\
		<p>De manera instintiva, comienzas a analizar la escena con una prolijidad solo equiparable a tu experiencia. \
		Te abres paso entre los presentes y observas que hay un cuerpo inerte, boca arriba. Tiene una posición extraña, \
		casi cómica. El cuello estaba torcido en un ángulo extraño.</p>\
		<img class='img-situation' src='./media/Imagenes/asesinado.jpg'>\
		<p>Como te había explicado el director minutos antes, la víctima es el cocinero del hotel, Bentley. Decides \
		comenzar a interrogar a los empleados en el <a href='restaurante'>restaurante</a> que ha sido desalojado \
		ante el asombro de los huéspedes.</p>"
	),

	restaurante: new undum.SimpleSituation(
		"<h1>RESTAURANTE</h1>\
		<p><a href='./jim' class='once'>El botones</a>, <a href='./antoine' class='once'>el maître</a> \
		y el <a href='./camarero' class='once'>camarero</a> esperan a que los llames.</p> <p>...</p>",

		{
			actions: {
				"jim": "<img src='media/Imagenes/jim.png' class='float_right' width= 150px>\
				<p>Jim, el botones, no sabe nada de lo sucedido. Llegó corriendo al pasillo cuando oyó un \
				grito aterrador de Bast. Casi se cae al escurrirse con una mancha de un líquido viscoso en el suelo.\
				</p>",

				"antoine": "<img src='media/Imagenes/antoine.png' class='float_right' width= 150px>\
				<p>Antoine, el maître parece más contrariado por el retraso que suponía el no tener \
				cocinero que el hecho de que haya muerto. Para una vez que Bast no había llegado tarde a su turno, \
				no habían podido dejar listo el restaurante a tiempo para la hora de la comida.</p>",

				"camarero": "<img src='media/Imagenes/bast.png' class='float_right' width= 150px>\
				<p>El camarero, visiblemente afectado, te cuenta que, como de costumbre, se dirigía a la \
				cocina para ayudar a preparar el restaurante antes de que empezara su turno a las 13:30. Lo que menos \
				se esperaba era encontrarse a Bentley tirado en el suelo, convulsionando. Tras gritar, lo primero que \
				hizo fue intentar socorrer al cocinero, poniéndolo de lado y sacándole la lengua por si se estaba \
				ahogando.</p>/"
			}
		}
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
