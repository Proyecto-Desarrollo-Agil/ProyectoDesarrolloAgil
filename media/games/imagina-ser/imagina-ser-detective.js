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

// En modo depuraci�n, que no haya efectos de jquery
jQuery.fx.off=false

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
			"<p>Vago, inteligente y cabez�n. Si hay que describir a Selitos con la mayor cortedad posible, \
			esa definici�n le queda como un guante. Y como si nos hubiera o�do hablar de �l y de su \
			terquedad, se ha pasado toda la ma�ana del domingo encerrado en su oficina. Obstinado. \
			Maquinando c�mo convencer a Paqui, con la en�sima prueba, de que su Antonio no est� persiguiendo \
			otra falda m�s corta.</p>\
			<br>\
			<p>Otro d�a m�s comiendo en la oficina...</p>\
                        <img class='img-situation' src='./media/Imagenes/detective1.jpg'>\
			<br>\
			<p>A sus 35 a�os, Selitos llevaba ya un tiempo viendo como su pasi�n por el oficio empezaba a \
			perderse. No os confundais, segu�a entregado a su trabajo, como el primer d�a cuando abri� su \
			gabinete, pero cada vez que descolgaba el tel�fono, volv�a los ojos en blanco ante una mutaci�n \
			del mismo caso de siempre. No esperaba enfrentarse todas las semanas ante un episodio a la altura \
			de Sherlock Holmes, pero en el fondo s� lo ansiaba. Aunque solo fuera una vez. </p>\
			<br>\
			<p><strong>De repente, el sonido del tel�fono arrastra a nuestro protagonista fuera de sus \
			pensamientos.</strong></p>\
			<p align='right' class='transient'><a href='oficinaselitos'>-></a></p>",
			{
                	exit: function(character, system, to) {
                		system.setQuality("progreso", character.qualities.progreso+20);
				system.setQuality("total", character.qualities.progreso/24);
                	} 
        		  
			}
		),

	oficinaselitos: new undum.SimpleSituation(
			
			"<h1>La llamada</h1>\
			<h2>Oficina</h2>\
			<p>Fulminando el tel�fono con la mirada no vas a conseguir mucho.</p>\
                        <img class='img-situation' src='./media/Imagenes/oficinaselites2.jpg'>\
			<ul class='options' class='once'> <center>\
            <li> <a href='llegada/atender'>atender la llamada</a> </li>\
            <li> <a href='llegada/noatender'>no atender la llamada y seguir lamentando tu infelicidad.</a> </li>\
        	</center> </ul>\
        	</p>",
			{
                	exit: function(character, system, to) {
                		system.setQuality("progreso", character.qualities.progreso+20);
				system.setQuality("total", character.qualities.progreso/24);
                	} 
        		  
			}
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
					del auricular se encontraba Elod�n, director del hotel Redfern. Muy a tu pesar, no ha \
					llamado para invitarte a pasar unos dias de vacaciones en su lujoso hotel, sino que ha \
					ocurrido un asesinato.</p>\
					<br>\
					<p><strong>El caso que iba a poner tu nombre en la portada del \
					peri�dico.</strong></p> \
					<br>\
					<p>Elod�n te ha pedido que acudas cuanto antes. Decides prepararte y \
					<a href='./llegada1' class='once'>ponerte en camino hacia el hotel</a>, donde te recibir� Elod�n, esperando que \
					puedas resolver este sorprendente caso. �Qui�n querr�a matar a alguien en el hotel con mayor \
					prestigio de la ciudad?</p>/",

					"noatender": "<img class='img-situation' src='./media/Imagenes/mirandoelmovil.jpg'>\
					<p>Ignoras el ruido del aparato hasta que, tras cuatro llamadas m�s, te deja tranquilo.</p>\
					<br>\
					<p>Al rato, un par de golpes secos en la puerta te sacan de tu ensimismamiento \
					y, mientras te levantas para abrir, piensas: �Qui�n viene un domingo a las 3 de la tarde? Al \
					abrir, te encuentras con que, para tu sorpresa, es Elod�n, director del hotel Redfern, y no \
					me visitaba precisamente para regalarme una estancia en su magn�fico hotel.</p> \
					<br>\
					<p>En su cara se refleja una palidez propia de la desesperaci�n m�s profunda� Tras hablar con �l, \
					me cuenta que ha habido un asesinato y nos disponemos a <a href='./llegada2' class='once'>ir al hotel</a> para, una \
					vez all�, detallar en profundidad sobre lo ocurrido.</p>",

					"llegada1": "<h2>Redfern</h2> <img class='img-situation' src='./media/Imagenes/hotel.jpg'>\
					<p>Tras salir del taxi, que ten�a cierto olor a cuadra, observas que, \
					al menos, el lugar no tiene a�n ese ambiente morboso t�pico de los asesinatos \
					misteriosos.</p>\
					<br>\
					<p>Entras con br�o al hotel y encuentras a Elod�n, solo en el hall. El director te insta a \
					<a href='pasillo/inicio'>ir un pasillo</a> que conecta con la cocina al final, atravesando la recepci�n y el \
					restaurante del Redfern.</p>",

					"llegada2": "<h2>Redfern</h2> <img class='img-situation' src='./media/Imagenes/hotel.jpg'>\
					<p>Tras un aparente eterno trayecto, salimos del taxi, que ten�a cierto olor a cuadra, \
					y sigues a Elod�n, que se dirige al hotel. Observas que, al menos, el lugar no tiene a�n ese ambiente \
					morboso t�pico de los asesinatos \misteriosos.</p>\
					<br>\
					<p>Junto con el director, atraviesas la recepci�n y el restaurante del Redfern hasta  \
					<a href='pasillo/inicio'>llegar a un pasillo</a> que conecta con la cocina al fondo.</p>",
					
				},
				exit: function(character, system, to) {
                		system.setQuality("progreso", character.qualities.progreso+20);
				system.setQuality("total", character.qualities.progreso/24);
            }
			}
	),

	pasillo: new undum.SimpleSituation(
			"",
        	{
        		actions: {
        			"inicio":"<h2>Pasillo de cocina</h2><p> Te acercas al grupito formado por, lo que parece, los empleados del hotel en medio del \
					pasillo. Algunos de ellos est�n conmocionados. </p>\
					<br>\
					<p>La �nica mujer del grupo llora desconsoladamente de espaldas al \
					resto, tap�ndose la cara con las manos.</p>\
					<br>\
					<p>De manera instintiva, comienzas a analizar la escena con una prolijidad solo equiparable a tu experiencia. \
					Te abres paso entre los presentes y observas que hay un cuerpo inerte, boca arriba. Tiene una posici�n extra�a, \
					casi c�mica.</p>\
					<img class='img-situation' src='./media/Imagenes/asesinado.jpg'>\
					<p>Como te hab�a explicado el director minutos antes, la v�ctima es el cocinero del hotel, Bentley. \
					</p>\
					<ul class='options'> <center>\
		            <li> <a href='cocina/inicio'>ir a la cocina a investigar</a> </li>\
		            <li> <a href='restaurante/interrogar'>pedir a todos los empleados que te acompa�en al restaurante para ser \
		            interrogados individualmente.</a> </li>\
		        	</center> </ul>",

		        	"trascocina": "<h2>Pasillo de cocina</h2><p><a href='restaurante/interrogar'>Pedir a todos los empleados que te acompa�en al \
		        	restaurante para ser interrogados invididualmente.</a></p>",

        			"yainterrogados": "<h2>Pasillo de cocina</h2><p> Al volver todos al pasillo, os reun�s con Elod�n y la mujer que lloraba, \
        			que segu�an ah�, como si su mera presencia fuera a revivir al chef.</p>\
					<ul class='options'> <center>\
		            <li> <a href='pasillo2/elodin'>hablar con Elod�n</a> </li>\
		            <li> <a href='pasillo2/mujer'>hablar con la mujer</a> </li>\
		        	</center> </ul>",

		        	"jade": "<p> Esta vez, te reunes con Jade.</p>\
		        	<br>\
		        	<p>Al llegar antes, no hab�as reparado lo nerviosa que est�.</p>\
		        	<br>\
		        	<p>La pobre se derrumba y, antes de t� abrir la boca, te confiesa que ella es inocente, pero que sospecha \
		        	de Bast.</p>\
		        	<br>\
		        	<p>�ltimamente, en casa, cada vez que sal�a el tema del trabajo y mencionaban a Bentley, Bast se pon�a hecho \
		        	un basilisco. Jade no lo reconoc�a, parec�a otra persona...</p>\
		        	<br>\
		        	<p>Antes de que la pobre se vuelva a derrumbar, decides dejar de presionarla.</p>\
		        	<br>\
		        	<p>Tienes claro tu siguiente movimiento. Le pides a Elod�n que te lleve de inmediato a la\
		        	<a href='saladeseguridad/inicio'>sala de seguridad</a>, \
		        	donde se puede revisar en directo las c�maras repartidas por las zonas comunes del hotel.</p>",

		        	"fin": "<h2>Pasillo de cocina</h2><p>Irrumpes en escena mientras que, con un movimiento m�s que estudiado, \
		        	descubres tus esposas, las abres y te diriges a Bast. Antes de que nadie se de cuenta, lo tienes \
		        	inmovilizado.</p>\
		        	<br>\
		        	<p>Si el camarero tiene algo que objetar, ya lo har� en comisar�a.</p>\
		        	<h1>Fin</h1>"
					
				},
				exit: function(character, system, to) {
                		system.setQuality("progreso", character.qualities.progreso+20);
				system.setQuality("total", character.qualities.progreso/24);
            }
        	}
	),

	pasillo2: new undum.SimpleSituation(
			"<h2>Pasillo de cocina</h2>",
        	{
        		actions: {
        			"elodin": "<p> Discretamente, gesticulas a Elod�n para que se re�na contigo en cerca de la entrada \
		        	del restaurante, apartados del resto.</p>\
		        	<br>\
		        	<p>Le preguntas sobre la mujer que se hab�a quedado a su lado mientras tu estabas fuera del pasillo.\
		        	Te dice que se llama Jade y es una de las limpiadoras del Redfern. Es la esposa de Bast, el camarero.</p>\
		        	<br>\
		        	Ella estaba en su turno cuando ha ocurrido la tragedia y, como el resto de empleados, acab� por reunirse \
		        	en el pasillo. </p>\
                                <img class='img-situation' src='./media/Imagenes/pasillo2.jpg'>\
		        	<br>\
		        	<p>Volv�is con el grupo.</p>\
		        	<br>\
		        	<p class='transient'>Te propones <a href='pasillo/jade'>hablar con Jade</a></p>",
		        	
		        	"mujer": "<p> Esta vez, te reunes con la mujer.</p>\
		        	<br>\
		        	<p>Al llegar antes, no hab�as reparado lo nerviosa que est�.</p>\
		        	<br>\
		        	<p>Nada m�s preguntarle su nombre, entre sollozos te dice que se llama Jade y la pobre se derrumba. Antes \
		        	de t� abrir la boca, te confiesa que ella es inocente, pero que sospecha \
		        	de Bast.</p>\
		        	<br>\
		        	<p>�ltimamente, en casa, cada vez que sal�a el tema del trabajo y mencionaban a Bentley, Bast se pon�a hecho \
		        	un basilisco. Jade no lo reconoc�a, parec�a otra persona...</p>\
		        	<br>\
		        	<p>Antes de que la pobre se vuelva a derrumbar, decides dejar de presionarla.</p>\
		        	<br>\
		        	<p>Tienes claro tu siguiente movimiento. Le pides a Elod�n que te lleve de inmediato a la\
		        	<a href='saladeseguridad/inicio'>sala de seguridad</a>, \
		        	donde se puede revisar en directo las c�maras repartidas por las zonas comunes del hotel.</p>",
        		
        		},
				exit: function(character, system, to) {
                		system.setQuality("progreso", character.qualities.progreso+20);
				system.setQuality("total", character.qualities.progreso/24);
            }
        	}
	),

	saladeseguridad: new undum.SimpleSituation(
			"<h2>Sala de seguridad</h2>",
			{
				actions: {
					"inicio": "<p>Elod�n se irrita al ver que, por alg�n motivo, las c�maras del pasillo \
					de cocina no han registrado nada.</p>\
					<br>\
					<p>Tras comprobar los archivos de v�deo de las c�maras de la cocina, \
					consegu�s dilucidar el misterio:</p>\
                                        <img class='img-situation' src='./media/Imagenes/saladeseguridad.jpg'>\
					<br>\
					<p>Pocos minutos despu�s del mediod�a de hoy, Bast entr� a hurtadillas en la cocina y vaci� un frasquito \
					en una de las dos tazas de caf� que hab�a en una <strong>preciosa bandeja plateada</strong>. Seguidamente, \
					sali� de la cocina con la bandeja.</p>\
					<br>\
					<p>Sin siquiera explicar nada a Elod�n, <a href='pasillo/fin'>regresas corriendo al pasillo </a>\
					para arrestar a Bast.</p>"
				},
				exit: function(character, system, to) {
                		system.setQuality("progreso", character.qualities.progreso+20);
				system.setQuality("total", character.qualities.progreso/24);
            }
			}
	),

	restaurante: new undum.SimpleSituation(
			"<h2>RESTAURANTE</h2>",

			{
				actions: {
					"interrogar": "<p>Entras el primero para improvisar una sala de interrogatorio. Mientras ordenas los \
					enseres de la estancia, ves una bandeja ba�ada en plata muy bonita.</p>\
					<br>\
					<p><a href='./jim' class='once'>El botones</a>, <a href='./antoine' class='once'>el ma�tre</a> \
					y el <a href='./camarero' class='once'>camarero</a> entran al restaurante y esperan a que los llames para \
					ser interrogados uno a uno.</p>\
                                        <img class='img-situation' src='./media/Imagenes/restaurante.jpg'>\
					<p class='transient'>Pod�is <a href='pasillo/yainterrogados'>volver al pasillo</a> cuando decidas.</p> <br>",

					"jim": "<img src='media/Imagenes/jim.png' class='float_right' width= 150px>\
					<p>Jim, el botones, no sabe nada de lo sucedido. Lleg� corriendo al pasillo cuando oy� un \
					grito aterrador de Bast.</p> <br>",

					"antoine": "<img src='media/Imagenes/antoine.png' class='float_right' width= 150px>\
					<p>Antoine, el ma�tre parece m�s contrariado por el retraso que supon�a el no tener \
					cocinero que el hecho de que haya muerto. Para una vez que Bast no hab�a llegado tarde a su turno, \
					no hab�an podido dejar listo el restaurante a tiempo para la hora de la comida.</p> <br>",

					"camarero": "<img src='media/Imagenes/bast.png' class='float_right' width= 150px>\
					<p>El camarero, visiblemente afectado, te cuenta que, como de costumbre, se dirig�a a la \
					cocina para ayudar a preparar el restaurante antes de que empezara su turno a las 13:30. Lo que menos \
					se esperaba era encontrarse a Bentley tirado en el suelo, convulsionando. Tras gritar, lo primero que \
					hizo fue intentar socorrer al cocinero, poni�ndolo de lado y sac�ndole la lengua por si se estaba \
					ahogando.</p> <br>"
				},
				exit: function(character, system, to) {
                		system.setQuality("progreso", character.qualities.progreso+20);
				system.setQuality("total", character.qualities.progreso/24);
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
                    <p>No ves nada extra�o. La estancia est� todo lo ordenada que pod�a estar antes de suspender el trabajo \
                    por la tr�gica muerte de Bentley: hay platos y cuberter�a a medio lavar, una olla en el fuego\
                    con comida ya destemplada, etc. Aqu� han estado trabajando hasta el �ltimo momento. </p>\
                    <br>\
                    <p>Lo �nico que hay en su sitio es el cuenco del az�car, que esta donde debe.</p>\
                    <br>\
                    <p>Decides <a href='pasillo/trascocina'>volver al pasillo</a> para recabar m�s informaci�n \
                    o <a href='almacen/inicio'>dirigirte al almac�n</a> que se encuentra justo en una puerta a la derecha de los fogones</p>"
                },
		exit: function(character, system, to) {
                		system.setQuality("progreso", character.qualities.progreso+20);
				system.setQuality("total", character.qualities.progreso/24);
            }
            }
    ),
    almacen: new undum.SimpleSituation(
            "<h2>ALMACEN</h2>",

            {
                actions: {
                    "inicio": function enter( character, system, action ){
			system.setQuality( "llave", true );
			system.write("<p>Entras al almacen y lo unico que se puede observar es una <a href='./antorcha'>pila de alimentos</a> amontonados \
                    y que bueno un poco sucio para un hotel de tan suma calidad como lo es este. Pero bueno, al caso, \
                    no consigues divisar nada que te resulte sospechoso, todo esto es demasiado extra�o... solamente te queda \
                    <a href='pasillo/trascocina'>volver al pasillo</a> para ver si se puede conseguir algo de pistas para este extra�o caso.</p> \
		    <img class='img-situation' src='./media/Imagenes/saladeseguridad.jpg'>");
                },
		'antorcha': function(character, system, action) {
			system.setQuality( "antorcha", true );

		},
		exit: function(character, system, to) {
                		system.setQuality("progreso", character.qualities.progreso+20);
				system.setQuality("total", character.qualities.progreso/24);
		}
		
            
          }}
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
     progreso: new undum.IntegerQuality(
        "Progreso sobre 100%", {priority:"0001", group:'stats'}
    ),
    total: new undum.IntegerQuality(
        "Conversion en dias", {priority:"0001", group:'stats'}
    ),
    antorcha: new undum.OnOffQuality(
        "Antorcha", {priority:"0001", group:'inventario', onDisplay:"&#10003;"}
    ),
	  llave: new undum.OnOffQuality(
        "Llave", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
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
     inventario: new undum.QualityGroup('Inventario', {priority:"0001"})
     
  
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {   
    character.qualities.progreso = 0; 
    character.qualities.total = 0; 
    system.setQuality( "antorcha" , false);
    system.setQuality( "llave" , false);
    
};
