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
			<p align='right' class='transient'><a href='oficinaselitos'>-></a></p>"
		),

	oficinaselitos: new undum.SimpleSituation(
			
			"<h1>La llamada</h1>\
			<h2>Oficina</h2>\
			<p>Fulminando el teléfono con la mirada no vas a conseguir mucho.</p>\
			<ul class='options' class='once'> <center>\
            <li> <a href='llegada/atender'>atender la llamada</a> </li>\
            <li> <a href='llegada/noatender'>no atender la llamada y seguir lamentando tu infelicidad.</a> </li>\
        	</center> </ul>\
        	</p>",
	),

	llegada: new undum.SimpleSituation(
			"",

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
					<a href='./llegada1' class='once'>ponerte en camino hacia el hotel</a>, donde te recibirá Elodín, esperando que \
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
					me cuenta que ha habido un asesinato y nos disponemos a <a href='./llegada2' class='once'>ir al hotel</a> para, una \
					vez allí, detallar en profundidad sobre lo ocurrido.</p>",

					"llegada1": "<h2>Redfern</h2> <img class='img-situation' src='./media/Imagenes/hotel.jpg'>\
					<p>Tras salir del taxi, que tenía cierto olor a cuadra, observas que, \
					al menos, el lugar no tiene aún ese ambiente morboso típico de los asesinatos \
					misteriosos.</p>\
					<br>\
					<p>Entras con brío al hotel y encuentras a Elodín, solo en el hall. El director te insta a \
					<a href='pasillo/inicio'>ir un pasillo</a> que conecta con la cocina al final, atravesando la recepción y el \
					restaurante del Redfern.</p>",

					"llegada2": "<h2>Redfern</h2> <img class='img-situation' src='./media/Imagenes/hotel.jpg'>\
					<p>Tras un aparente eterno trayecto, salimos del taxi, que tenía cierto olor a cuadra, \
					y sigues a Elodín, que se dirige al hotel. Observas que, al menos, el lugar no tiene aún ese ambiente \
					morboso típico de los asesinatos \misteriosos.</p>\
					<br>\
					<p>Junto con el director, atraviesas la recepción y el restaurante del Redfern hasta  \
					<a href='pasillo/inicio'>llegar a un pasillo</a> que conecta con la cocina al fondo.</p>"
				}
			}
	),

	pasillo: new undum.SimpleSituation(
			"",
        	{
        		actions: {
        			"inicio":"<h2>Pasillo de cocina</h2><p> Te acercas al grupito formado por, lo que parece, los empleados del hotel en medio del \
					pasillo. Algunos de ellos están conmocionados. </p>\
					<br>\
					<p>La única mujer del grupo llora desconsoladamente de espaldas al \
					resto, tapándose la cara con las manos.</p>\
					<br>\
					<p>De manera instintiva, comienzas a analizar la escena con una prolijidad solo equiparable a tu experiencia. \
					Te abres paso entre los presentes y observas que hay un cuerpo inerte, boca arriba. Tiene una posición extraña, \
					casi cómica.</p>\
					<img class='img-situation' src='./media/Imagenes/asesinado.jpg'>\
					<p>Como te había explicado el director minutos antes, la víctima es el cocinero del hotel, Bentley. \
					</p>\
					<ul class='options'> <center>\
		            <li> <a href='cocina/inicio'>ir a la cocina a investigar</a> </li>\
		            <li> <a href='restaurante/interrogar'>pedir a todos los empleados que te acompañen al restaurante para ser \
		            interrogados individualmente.</a> </li>\
		        	</center> </ul>",

		        	"trascocina": "<h2>Pasillo de cocina</h2><p><a href='restaurante/interrogar'>Pedir a todos los empleados que te acompañen al \
		        	restaurante para ser interrogados invididualmente.</a></p>",

        			"yainterrogados": "<h2>Pasillo de cocina</h2><p> Al volver todos al pasillo, os reunís con Elodín y la mujer que lloraba, \
        			que seguían ahí, como si su mera presencia fuera a revivir al chef.</p>\
					<ul class='options'> <center>\
		            <li> <a href='pasillo2/elodin'>hablar con Elodín</a> </li>\
		            <li> <a href='pasillo2/mujer'>hablar con la mujer</a> </li>\
		        	</center> </ul>",

		        	"jade": "<p> Esta vez, te reunes con Jade.</p>\
		        	<br>\
		        	<p>Al llegar antes, no habías reparado lo nerviosa que está.</p>\
		        	<br>\
		        	<p>La pobre se derrumba y, antes de tú abrir la boca, te confiesa que ella es inocente, pero que sospecha \
		        	de Bast.</p>\
		        	<br>\
		        	<p>Últimamente, en casa, cada vez que salía el tema del trabajo y mencionaban a Bentley, Bast se ponía hecho \
		        	un basilisco. Jade no lo reconocía, parecía otra persona...</p>\
		        	<br>\
		        	<p>Antes de que la pobre se vuelva a derrumbar, decides dejar de presionarla.</p>\
		        	<br>\
		        	<p>Tienes claro tu siguiente movimiento. Le pides a Elodín que te lleve de inmediato a la\
		        	<a href='saladeseguridad/inicio'>sala de seguridad</a>, \
		        	donde se puede revisar en directo las cámaras repartidas por las zonas comunes del hotel.</p>",

		        	"fin": "<h2>Pasillo de cocina</h2><p>Irrumpes en escena mientras que, con un movimiento más que estudiado, \
		        	descubres tus esposas, las abres y te diriges a Bast. Antes de que nadie se de cuenta, lo tienes \
		        	inmovilizado.</p>\
		        	<br>\
		        	<p>Si el camarero tiene algo que objetar, ya lo hará en comisaría.</p>\
		        	<h1>Fin</h1>"
					
				}
        	}
	),

	pasillo2: new undum.SimpleSituation(
			"<h2>Pasillo de cocina</h2>",
        	{
        		actions: {
        			"elodin": "<p> Discretamente, gesticulas a Elodín para que se reúna contigo en cerca de la entrada \
		        	del restaurante, apartados del resto.</p>\
		        	<br>\
		        	<p>Le preguntas sobre la mujer que se había quedado a su lado mientras tu estabas fuera del pasillo.\
		        	Te dice que se llama Jade y es una de las limpiadoras del Redfern. Es la esposa de Bast, el camarero.</p>\
		        	<br>\
		        	Ella estaba en su turno cuando ha ocurrido la tragedia y, como el resto de empleados, acabó por reunirse \
		        	en el pasillo. </p>\
		        	<br>\
		        	<p>Volvéis con el grupo.</p>\
		        	<br>\
		        	<p class='transient'>Te propones <a href='pasillo/jade'>hablar con Jade</a></p>",
		        	
		        	"mujer": "<p> Esta vez, te reunes con la mujer.</p>\
		        	<br>\
		        	<p>Al llegar antes, no habías reparado lo nerviosa que está.</p>\
		        	<br>\
		        	<p>Nada más preguntarle su nombre, entre sollozos te dice que se llama Jade y la pobre se derrumba. Antes \
		        	de tú abrir la boca, te confiesa que ella es inocente, pero que sospecha \
		        	de Bast.</p>\
		        	<br>\
		        	<p>Últimamente, en casa, cada vez que salía el tema del trabajo y mencionaban a Bentley, Bast se ponía hecho \
		        	un basilisco. Jade no lo reconocía, parecía otra persona...</p>\
		        	<br>\
		        	<p>Antes de que la pobre se vuelva a derrumbar, decides dejar de presionarla.</p>\
		        	<br>\
		        	<p>Tienes claro tu siguiente movimiento. Le pides a Elodín que te lleve de inmediato a la\
		        	<a href='saladeseguridad/inicio'>sala de seguridad</a>, \
		        	donde se puede revisar en directo las cámaras repartidas por las zonas comunes del hotel.</p>",
        		
        		}
        	}
	),

	saladeseguridad: new undum.SimpleSituation(
			"<h2>Sala de seguridad</h2>",
			{
				actions: {
					"inicio": "<p>Elodín se irrita al ver que, por algún motivo, las cámaras del pasillo \
					de cocina no han registrado nada.</p>\
					<br>\
					<p>Tras comprobar los archivos de vídeo de las cámaras de la cocina, \
					conseguís dilucidar el misterio:</p>\
					<br>\
					<p>Pocos minutos después del mediodía de hoy, Bast entró a hurtadillas en la cocina y vació un frasquito \
					en una de las dos tazas de café que había en una <strong>preciosa bandeja plateada</strong>. Seguidamente, \
					salió de la cocina con la bandeja.</p>\
					<br>\
					<p>Sin siquiera explicar nada a Elodín, <a href='pasillo/fin'>regresas corriendo al pasillo </a>\
					para arrestar a Bast.</p>"
				}
			}
	),

	restaurante: new undum.SimpleSituation(
			"<h2>RESTAURANTE</h2>",

			{
				actions: {
					"interrogar": "<p>Entras el primero para improvisar una sala de interrogatorio. Mientras ordenas los \
					enseres de la estancia, ves una bandeja bañada en plata muy bonita.</p>\
					<br>\
					<p><a href='./jim' class='once'>El botones</a>, <a href='./antoine' class='once'>el maître</a> \
					y el <a href='./camarero' class='once'>camarero</a> entran al restaurante y esperan a que los llames para \
					ser interrogados uno a uno.</p>\
					<p class='transient'>Podéis <a href='pasillo/yainterrogados'>volver al pasillo</a> cuando decidas.</p> <br>",

					"jim": "<img src='media/Imagenes/jim.png' class='float_right' width= 150px>\
					<p>Jim, el botones, no sabe nada de lo sucedido. Llegó corriendo al pasillo cuando oyó un \
					grito aterrador de Bast.</p> <br>",

					"antoine": "<img src='media/Imagenes/antoine.png' class='float_right' width= 150px>\
					<p>Antoine, el maître parece más contrariado por el retraso que suponía el no tener \
					cocinero que el hecho de que haya muerto. Para una vez que Bast no había llegado tarde a su turno, \
					no habían podido dejar listo el restaurante a tiempo para la hora de la comida.</p> <br>",

					"camarero": "<img src='media/Imagenes/bast.png' class='float_right' width= 150px>\
					<p>El camarero, visiblemente afectado, te cuenta que, como de costumbre, se dirigía a la \
					cocina para ayudar a preparar el restaurante antes de que empezara su turno a las 13:30. Lo que menos \
					se esperaba era encontrarse a Bentley tirado en el suelo, convulsionando. Tras gritar, lo primero que \
					hizo fue intentar socorrer al cocinero, poniéndolo de lado y sacándole la lengua por si se estaba \
					ahogando.</p> <br>"
				}
			}
	),


	cocina: new undum.SimpleSituation(
            "<h2>COCINA</h2>",

            {
                actions: {
                    "inicio": "<p>Como el resto de las estancias del hotel por las que has pasado y salvo en el pasillo, \
                    en la cocina reina un silencio artificial, compuesto por la ausencia de personal y solo roto por las \
                    conversaciones y sollozos que se cuelan desde el pasillo.</p>\
                    <br>\
                    <p>No ves nada extraño. La estancia está todo lo ordenada que podía estar antes de suspender el trabajo \
                    por la trágica muerte de Bentley: hay platos y cubertería a medio lavar, una olla en el fuego\
                    con comida ya destemplada, etc. Aquí han estado trabajando hasta el último momento. </p>\
                    <br>\
                    <p>Lo único que hay en su sitio es el cuenco del azúcar, que esta donde debe.</p>\
                    <br>\
                    <p>Decides <a href='pasillo/trascocina'>volver al pasillo</a> para recabar más información \
                    o <a href='almacen/inicio'>dirigirte al almacén</a> que se encuentra justo en una puerta a la derecha de los fogones</p>"
                }
            }
    ),
    almacen: new undum.SimpleSituation(
            "<h2>ALMACEN</h2>",

            {
                actions: {
                    "inicio": "<p>Entras al almacen y lo unico que se puede observar es una pila de alimentos amontonados \
                    y que bueno un poco sucio para un hotel de tan suma calidad como lo es este. Pero bueno, al caso, \
                    no consigues divisar nada que te resulte sospechoso, todo esto es demasiado extraño... solamente te queda \
                    <a href='pasillo/trascocina'>volver al pasillo</a> para ver si se puede conseguir algo de pistas para este extraño caso.</p>"
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
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})

};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");

};
