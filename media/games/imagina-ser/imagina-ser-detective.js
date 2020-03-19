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
			"<p>Vago, inteligente y cabezón. Si hay que describir a Selitos con la mayor cortedad posible, \
			esa definición le queda como un guante. Y como si nos hubiera oído hablar de él y de su \
			terquedad, se ha pasado toda la mañana del domingo encerrado en su oficina. Obstinado. \
			Maquinando cómo convencer a Paqui, con la enésima prueba, de que su Antonio no está persiguiendo \
			otra falda más corta.</p>\
			<br>\
			<p>Otro día más comiendo en la oficina...</p>\
			<br>\
			<p>A sus 35 años, Selitos llevaba ya un tiempo viendo como su pasión por el oficio empezaba a \
			perderse. No os confundais, seguía entregado a su trabajo, como el primer día cuando abrió su \
			gabinete, pero cada vez que descolgaba el teléfono, volvía los ojos en blanco ante una mutación \
			del mismo caso de siempre. No esperaba enfrentarse todas las semanas ante un episodio a la altura \
			de Sherlock Holmes, pero en el fondo sí lo ansiaba. Aunque solo fuera una vez. </p>\
			<br>\
			<p><strong>De repente, el sonido del teléfono arrastra a nuestro protagonista fuera de sus \
			pensamientos.</strong></p>\
			<p class='transient' align='right'><a href='oficinaselitos'> -> </a></p>"
		),

	oficinaselitos: new undum.SimpleSituation(
			"<h1>La llamada</h1>\
			<h2>Oficina</h2>\
			<p>Fulminando el teléfono con la mirada no vas a conseguir mucho.\
			<ul class='options'> <center>\
            <li> <a href='./atender'>atender la llamada</a> </li>\
            <li> <a href='./noatender'>no atender la llamada y seguir lamentando tu infelicidad.</a> </li>\
        	</center> </ul>\
        	</p>",

        	{
        		actions: {
					"atender": "<img class='img-situation' src='./media/Imagenes/detective.jpg'>\
					<br>\
					<p>...</p>\
					<br>\
					<p>Tras colgar, te das cuenta de que no es un caso corriente. Al otro lado \
					del auricular se encontraba Elodín, director del hotel Redfern. Muy a tu pesar, no ha \
					llamado para invitarte a pasar unos dias de vacaciones en su lujoso hotel, sino que ha \
					ocurrido un asesinato.</p>\
					<br>\
					<p><strong>El caso que iba a poner tu nombre en la portada del \
					periódico.</strong></p> \
					<br>\
					<p>Elodín te ha pedido que acudas cuanto antes. Decides prepararte y \
					<a href='llegada/llegada1'>ponerte en camino hacia el hotel</a>, donde te recibirá Elodín, esperando que \
					puedas resolver este sorprendente caso. ¿Quién querría matar a alguien en el hotel con mayor \
					prestigio de la ciudad?</p>/",

					"noatender": "<img class='img-situation' src='./media/Imagenes/mirandoelmovil.jpg'>\
					<p>Ignoras el ruido del aparato hasta que, tras cuatro llamadas más, te deja tranquilo.</p>\
					<br>\
					<p>Al rato, un par de golpes secos en la puerta te sacan de tu ensimismamiento \
					y, mientras te levantas para abrir, piensas: ¿Quién viene un domingo a las 3 de la tarde? Al \
					abrir, te encuentras con que, para tu sorpresa, es Elodín, director del hotel Redfern, y no \
					me visitaba precisamente para regalarme una estancia en su magnífico hotel.</p> \
					<br>\
					<p>En su cara se refleja una palidez propia de la desesperación más profunda… Tras hablar con él, \
					me cuenta que ha habido un asesinato y nos disponemos a <a href='llegada/llegada2'>ir al hotel</a> para, una \
					vez allí, detallar en profundidad sobre lo ocurrido.</p>"
				}
			}
	),



	llegada: new undum.SimpleSituation(
			"<h2>HOTEL</h2> <img class='img-situation' src='./media/Imagenes/hotel.jpg'>",

			{
				actions: {
					"llegada1": "<p>Tras salir del taxi, que tenía cierto olor a cuadra, observas que, \
					al menos, el lugar no tiene aún ese ambiente morboso típico de los asesinatos \
					misteriosos.</p>\
					<br>\
					<p>Entras con brío al hotel y encuentras a Elodín, solo en el hall. El director te insta a \
					<a href='pasillo/inicio'>ir un pasillo</a> que conecta con la cocina al final, atravesando la recepción y el \
					restaurante del Redfern.</p>",

					"llegada2": "<p>Tras un aparente eterno trayecto, salimos del taxi, que tenía cierto olor a cuadra, \
					y sigues a Elodín, que se dirige al hotel. Observas que, al menos, el lugar no tiene aún ese ambiente \
					morboso típico de los asesinatos \misteriosos.</p>\
					<br>\
					<p>Junto con el director, atraviesas la recepción y el restaurante del Redfern hasta  \
					<a href='pasillo/inicio'>llegar a un pasillo</a> que conecta con la cocina al fondo.</p>"
				}
			}
	),


	pasillo: new undum.SimpleSituation(
			"<h2>Pasillo de cocina</h2>",
        	{
        		actions: {
        			"inicio":"<p> Te acercas al grupito formado por los empleados del hotel en medio del \
					pasillo. Algunos de ellos están conmocionados. </p>\
					<br>\
					<p>Jade, la limpiadora, llora desconsoladamente de espaldas al \
					resto, tapándose la cara con las manos.</p>\
					<br>\
					<p>De manera instintiva, comienzas a analizar la escena con una prolijidad solo equiparable a tu experiencia. \
					Te abres paso entre los presentes y observas que hay un cuerpo inerte, boca arriba. Tiene una posición extraña, \
					casi cómica. El cuello estaba torcido en un ángulo extraño.</p>\
					<img class='img-situation' src='./media/Imagenes/asesinado.jpg'>\
					<p>Como te había explicado el director minutos antes, la víctima es el cocinero del hotel, Bentley. \
					</p>\
					<ul class='options'> <center>\
		            <li> <a href='cocina/inicio'>ir a la cocina a investigar</a> </li>\
		            <li> <a href='restaurante/interrogar'>pedir a todos los empleados que te acompañen al restaurante para ser \
		            interrogados individualmente.</a> </li>\
		        	</center> </ul>",

		        	"trascocina": "<p>Por escribir. <a href='restaurante/interrogar'>Pedir a todos los empleados que te acompañen al \
		        	restaurante para ser interrogados invididualmente.</a></p>",

        			"yainterrogados": "<p> Al volver todos al pasillo, os reunís con Elodín y la limpiadora, que seguían ahí, \
        			como si su mera presencia fuera a revivir al chef.</p>\
					<ul class='options'> <center>\
		            <li> <a href='cocina/inicio'>ir a la cocina a investigar</a> </li>\
		            <li> <a href='restaurante/inicio'>ir al restaurante.</a> </li>\
		        	</center> </ul>"
        		}
        	}
	),

	restaurante: new undum.SimpleSituation(
			"<h2>RESTAURANTE</h2>",

			{
				actions: {
					"inicio": "<p>Hasta aquí, colega. Te habia avisado de que no habia nada apenas.</p>",

					"interrogar": "<p><a href='./jim' class='once'>El botones</a>, <a href='./antoine' class='once'>el maître</a> \
					y el <a href='./camarero' class='once'>camarero</a> esperan a que los llames para ser interrogados uno a uno.</p>\
					<p class='transient'>Podéis <a href='pasillo/yainterrogados'>volver al pasillo</a> cuando decidas.</p> <br>",

					"jim": "<img src='media/Imagenes/jim.png' class='float_right' width= 150px>\
					<p>Jim, el botones, no sabe nada de lo sucedido. Llegó corriendo al pasillo cuando oyó un \
					grito aterrador de Bast. Casi se cae al escurrirse con una mancha de un líquido viscoso en el suelo.\
					</p> <br>",

					"antoine": "<img src='media/Imagenes/antoine.png' class='float_right' width= 150px>\
					<p>Antoine, el maître parece más contrariado por el retraso que suponía el no tener \
					cocinero que el hecho de que haya muerto. Para una vez que Bast no había llegado tarde a su turno, \
					no habían podido dejar listo el restaurante a tiempo para la hora de la comida.</p> <br>",

					"camarero": "<img src='media/Imagenes/bast.png' class='float_right' width= 150px>\
					<p>El camarero, visiblemente afectado, te cuenta que, como de costumbre, se dirigía a la \
					cocina para ayudar a preparar el restaurante antes de que empezara su turno a las 13:30. Lo que menos \
					se esperaba era encontrarse a Bentley tirado en el suelo, convulsionando. Tras gritar, lo primero que \
					hizo fue intentar socorrer al cocinero, poniéndolo de lado y sacándole la lengua por si se estaba \
					ahogando. <br></p>"
				}
			}
	),


	cocina: new undum.SimpleSituation(
			"<h2>COCINA</h2>",

			{
				actions: {
					"inicio": "<p>Hasta aquí, colega. Te habia avisado de que no habia nada apenas. Prueba ir al restaurante \
					si no lo has hecho aun. <a href='pasillo/trascocina'>Volver al pasillo</a></p>"
				}
			}
	)

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
