// Contenido de los Términos y Condiciones de Del Río Internet.
// Transcripción del documento original (132 cláusulas) para publicarlo como página web.

export type ClausulaTerminos = {
  numero: number;
  texto: string;
};

export type SeccionTerminos = {
  id: string;
  titulo: string;
  clausulas: ClausulaTerminos[];
};

export const terminosSecciones: SeccionTerminos[] = [
  {
    id: "generales",
    titulo: "Generales",
    clausulas: [
      {
        numero: 1,
        texto: "Los presentes Términos y Condiciones tienen carácter obligatorio y vinculante, y regulan expresamente todas las relaciones que se establezcan entre: REDES DEL RÍO S.A.S., con oficina comercial en Olavarría 1180, Perdriel, Mendoza, Argentina, en adelante \"DEL RÍO\" y/o \"EL PRESTADOR\"; y el titular del servicio de acceso a la red de Internet, en adelante \"EL CLIENTE\" y/o \"EL USUARIO\". El USUARIO declara bajo juramento que todos los datos proporcionados a DEL RÍO son verdaderos, correctos y completos. El servicio prestado por DEL RÍO consistirá en el acceso a Internet mediante tecnología de fibra óptica o enlace inalámbrico, sujeto a disponibilidad técnica. Este acceso podrá incluir, en su caso, la entrega de equipos en comodato al CLIENTE, cuya utilización se regirá por la modalidad contratada, con disponibilidad estimada de 24 horas al día, los 365 días del año. Se establece que, para un cliente final residencial, se considera un uso normal del servicio el que no supere una tasa de transferencia mensual (subida y bajada) de 100 Gigabytes. La utilización del SERVICIO por parte del CLIENTE implica el conocimiento y aceptación plena de los presentes Términos y Condiciones.",
      },
      {
        numero: 2,
        texto: "Los presentes Términos y Condiciones se encuentran publicados en el sitio web de DEL RÍO y serán considerados conocidos y expresamente aceptados por las personas humanas o jurídicas que adquieran el/los servicio/s provistos por DEL RÍO, siempre que no hayan contratado un plan corporativo o empresarial (en adelante, el “CLIENTE”). Asimismo, estos Términos y Condiciones y la/s Solicitud/es de Servicio/s que los integran y complementan constituyen el ACUERDO y/o CONTRATO completo entre DEL RÍO y el CLIENTE respecto de todo lo previsto en ellos, y sustituyen cualquier comunicación o propuesta anterior o contemporánea, oral o escrita, entre DEL RÍO y el CLIENTE respecto de su contenido.",
      },
      {
        numero: 3,
        texto: "DEL RÍO podrá establecer nuevas condiciones y/o modificaciones a cualquiera de las cláusulas contenidas en los presentes Términos y Condiciones Generales y/o en la/s Solicitud/es de Servicio/s que los integran. Dichas modificaciones serán notificadas al CLIENTE con una antelación no menor a treinta (30) días corridos previos a su implementación, y/o publicadas en los sitios web de DEL RÍO. Si el CLIENTE no estuviera de acuerdo con la modificación propuesta, podrá rescindir el contrato sin cargo, comunicando dicha decisión al PRESTADOR por los canales de Atención al Cliente, sin perjuicio del oportuno pago de los abonos que se hubiesen devengado hasta la fecha de comunicación del pedido de baja. Este derecho a rescindir sin costo para el CLIENTE deberá incluirse en la notificación que se le curse e informarse en el sitio de Internet de DEL RÍO. El uso del/los servicio/s luego de efectuadas las modificaciones implica la expresa aceptación de las mismas.",
      },
      {
        numero: 4,
        texto: "Por el solo hecho de contratar el Servicio, el CLIENTE acepta que DEL RÍO tiene derecho a comunicarse con él por diversos medios y sistemas, incluyendo llamadas telefónicas, correo postal, correo electrónico, SMS, WhatsApp u otros, y enviar información que DEL RÍO considere, a su exclusivo criterio, de interés para el CLIENTE. Esto incluye publicidad, ofertas y promociones propias, de empresas vinculadas o terceros, así como poner a disposición facturas de otros servicios contratados con DEL RÍO o sus empresas vinculadas, además de realizar reclamos por deudas y obligaciones pendientes.",
      },
      {
        numero: 5,
        texto: "A los efectos de la prestación del Servicio de Acceso a Internet, es necesaria la instalación de \"EQUIPOS\" en el domicilio del CLIENTE. Se prevén distintas alternativas de equipos, las cuales quedan expresas en el contrato de alta de servicio o en el reporte de visita del técnico, en función del/los servicios que hayan sido contratados.",
      },
      {
        numero: 6,
        texto: "Los datos personales suministrados por el CLIENTE a DEL RIO podrán ser utilizados para unificar las registraciones con empresas vinculadas, autorizando expresamente el CLIENTE a DEL RIO a ceder dichos datos con el fin de unificar la información en sus sistemas.",
      },
      {
        numero: 7,
        texto: "La información a la que acceda DEL RIO en virtud del servicio brindado es confidencial, salvo que una orden judicial o administrativa lo obligue a revelarla.",
      },
      {
        numero: 8,
        texto: "El CLIENTE autoriza a DEL RIO a enviarle propuestas comerciales relacionadas con sus servicios y/o productos, realizar análisis de mercado, utilizar sus datos para atención al CLIENTE y transferir información relativa a sus datos personales —como nombre, apellido, DNI, domicilio, número de abonado y correo electrónico— con el fin de enviar propuestas comerciales, realizar análisis de mercado y brindar atención vinculada a los servicios prestados por DEL RIO",
      },
      {
        numero: 9,
        texto: "El CLIENTE acepta expresamente que ciertos contenidos o programaciones pueden estar disponibles por tiempo limitado. El acceso será ilimitado mientras el contenido permanezca disponible. DEL RIO se reserva el derecho de deshabilitar el acceso a cualquier contenido en cualquier momento, sin que ello implique responsabilidad o incumplimiento de sus obligaciones contractuales. Asimismo, DEL RIO podrá modificar, reorganizar, agregar o eliminar contenidos o programaciones, en cualquier momento y a su entera discreción —incluyendo cambios entre dispositivos o países— sin que esto genere derecho alguno a reclamo, devolución de fondos o compensación por parte del CLIENTE.",
      },
      {
        numero: 10,
        texto: "Al contratar el servicio, el CLIENTE autoriza a Del Río a usar sus datos personales, presentes o futuros, para administrar el servicio, gestionar la cobranza, resolver incidencias, realizar análisis de mercado y enviarle propuestas comerciales propias o de empresas vinculadas. También acepta que estos datos puedan ser compartidos con dichas empresas para esos mismos fines. Además, el CLIENTE entiende que algunos contenidos pueden estar disponibles por tiempo limitado y que Del Río puede modificar o quitar contenido sin previo aviso, sin que esto genere derecho a reclamos, devoluciones o compensaciones. Toda la información a la que Del Río accede en virtud del servicio se considera confidencial, salvo que una orden judicial o administrativa exija su revelación..",
      },
      {
        numero: 11,
        texto: "En caso de que los datos del CLIENTE sean requeridos por vía legal, administrativa o judicial, Del Río se verá obligada a revelarlos a la autoridad correspondiente. Siempre que la legislación y los procedimientos lo permitan, Del Río informará al CLIENTE sobre dichos requerimientos.",
      },
      {
        numero: 12,
        texto: "El CLIENTE toma conocimiento y acepta expresamente, y sin reservas, que aquellos datos que no requieren su consentimiento previo para su recolección, tratamiento y cesión —conforme con lo establecido en los artículos 5°, inciso 2, subinciso c), y 11° de la Ley N° 25.326 de Protección de Datos Personales— podrán ser utilizados por DEL RÍO, o por terceras personas a las que DEL RÍO se los hubiere cedido, con el fin de realizar acciones promocionales de marketing, sin necesidad de la notificación y/o autorización previa del CLIENTE. Asimismo, el CLIENTE presta su consentimiento previo, expreso e informado a DEL RÍO para que esta última suministre sus datos personales a: (i) cualquier sociedad que integre el mismo grupo empresarial al que DEL RÍO pertenezca, y (ii) proveedores de productos y/o servicios con quienes DEL RÍO tenga convenio comercial vigente, con el objeto de entregar, ofrecer y/o vender productos, servicios y soluciones. En caso de que el CLIENTE quisiera conocer la identificación y datos del cesionario de los datos personales cedidos, deberá solicitárselo a DEL RÍO por medio fehaciente o personalmente en los canales de atención al CLIENTE, acreditando fehacientemente su identidad. Asimismo, el CLIENTE conoce y acepta expresamente que sus datos personales serán incluidos en archivos automatizados, procesados bajo normas de estricta confidencialidad y protección de datos. Los datos personales del CLIENTE serán utilizados por DEL RÍO con el objeto de brindar y mejorar su oferta de servicios y podrán ser utilizados para acciones promocionales de marketing propias o de terceros y/o con fines estadísticos.",
      },
      {
        numero: 13,
        texto: "El CLIENTE declara haber sido debidamente informado, y aceptar expresamente, las características técnicas del/los Servicio/s solicitado/s, incluyendo sus funcionalidades, condiciones de disponibilidad, cobertura geográfica y limitaciones técnicas. Asimismo, el CLIENTE reconoce y acepta que, a la fecha, la disponibilidad del/los Servicio/s no se extiende a la totalidad del territorio nacional. En tal sentido, el CLIENTE manifiesta conocer que podrá consultar, a través de los Canales de Atención al CLIENTE de Del Río, información actualizada respecto del alcance técnico y geográfico del/los Servicio/s, así como eventuales modificaciones a dicha disponibilidad.",
      },
      {
        numero: 14,
        texto: "DEL RIO podrá, en cualquier momento, sustituir o modificar los presentes Términos y Condiciones o introducir nuevas condiciones de uso, las cuales serán aplicables a partir de su entrada en vigencia. Durante dicho plazo, el CLIENTE podrá manifestar su rechazo a las modificaciones y, en tal caso, finalizar el servicio al vencimiento del plazo establecido en la cláusula “Duración y Terminación” siempre que exista y establezca un plazo; hasta dicho vencimiento se mantendrán las condiciones inicialmente pactadas. El CLIENTE reconoce haber leído los Términos y Condiciones y acepta que los mismos están disponibles en todo momento en el sitio web de DEL RÍO, quedando bajo su responsabilidad la lectura de los Términos y Condiciones vigentes.",
      },
      {
        numero: 15,
        texto: "El incumplimiento de cualquiera de las previsiones establecidas en los presentes Términos y Condiciones Generales facultará a DEL RÍO a suspender o finalizar alguno o todos los Servicios provistos, bloquear cualquier actividad abusiva y/o tomar cualquier acción que considere apropiada a su exclusivo criterio. Cualquier divergencia surgida de la interpretación y aplicación del presente contrato se someterá a la jurisdicción de los Tribunales Ordinarios de la ciudad de Mendoza, Provincia de Mendoza, renunciando expresamente a cualquier otro fuero, inclusive el Federal.",
      },
      {
        numero: 16,
        texto: "El CLIENTE constituye domicilio postal y electrónico en los indicados en el formulario de la/s Solicitud/es de Servicio/s y autoriza expresamente y sin reservas a DEL RÍO a remitir todas las notificaciones, facturas, comunicaciones y cualquier tipo de información al domicilio electrónico constituido, considerándose válidas todas las notificaciones y comunicaciones efectuadas desde y hacia dicho domicilio mientras el CLIENTE no notifique por escrito el cambio del mismo; asimismo, el CLIENTE acepta expresamente que DEL RÍO dejará de enviar notificaciones, facturas, comunicaciones o cualquier otro tipo de información al domicilio físico, siendo este reemplazado por la/s dirección/es electrónica/s mencionadas en el formulario de solicitud, y reconoce que queda constituido domicilio especial para estos efectos en Olavarría 1180, Perdriel, Mendoza, donde serán válidas todas las notificaciones judiciales y extrajudiciales que se efectúen",
      },
      {
        numero: 17,
        texto: "El CLIENTE declara conocer el Reglamento de Clientes de los Servicios de Tecnologías de la Información y las Comunicaciones, que integra y complementa los presentes Términos y Condiciones (Resolución 733-E/2017 del Ministerio de Modernización).",
      },
      {
        numero: 18,
        texto: "El Reglamento no será aplicable a las personas jurídicas que hayan contratado planes corporativos o empresariales; se entiende por éstos a los contratos en los cuales las características del servicio, de la red y la totalidad de las condiciones técnicas, económicas y jurídicas hayan sido negociadas y pactadas de común acuerdo entre las partes, y se haya acordado expresamente que dicho reglamento no resulta de aplicación.",
      },
      {
        numero: 19,
        texto: "Cada cláusula de estos Términos y Condiciones Generales es válida por sí misma y no invalida las demás; en caso de que alguna cláusula resulte inválida o incompleta, podrá ser reemplazada por otra equivalente y válida mediante acuerdo entre las partes.",
      },
    ],
  },
  {
    id: "uso-y-contratacion",
    titulo: "Condiciones de uso y contratación",
    clausulas: [
      {
        numero: 20,
        texto: "El servicio de acceso a la red de Internet (el “Servicio”) se presta al CLIENTE en calidad de CLIENTE final, para su uso exclusivo en su domicilio de instalación. DEL RÍO proporcionará el Servicio al CLIENTE contra el pago de la conexión y de los abonos mensuales para su recepción, bajo la modalidad de SERVICIO PREPAGO. El servicio básico comprende una instalación tipo estándar con la conexión de una sola boca. Los materiales extras y las nuevas bocas que se soliciten se abonarán por separado. Los abonos se facturarán a partir de la fecha de instalación. El período comprendido entre dicha fecha y el fin de mes se facturará con la denominación “proporcionales” y a los valores vigentes al momento de facturación. Si el CLIENTE desiste de la presente una vez facturada y cobrada la instalación, no se devolverá el pago por conexión..",
      },
      {
        numero: 21,
        texto: "El CLIENTE, para utilizar el Servicio, deberá tener capacidad legal para contratar. No podrán acceder a los servicios quienes carezcan de dicha capacidad, quienes hayan sido suspendidos o inhabilitados, ni los menores de edad. Los padres, tutores o responsables de los menores de edad o incapaces que utilicen el Servicio serán responsables por dicho uso, incluyendo cualquier cargo, facturación o daño que se derive del mismo. Si el CLIENTE fuese menor de edad, podrá utilizar el Servicio únicamente con autorización legal o si la cuenta hubiese sido creada o registrada por su padre, madre o tutor, deslindando a DEL RÍO de cualquier responsabilidad. Es imprescindible la presencia del CLIENTE solicitante, o de una persona mayor de 18 años por él autorizada, al momento de la instalación de los Servicios.",
      },
      {
        numero: 22,
        texto: "La Solicitud del/los Servicio/s y la eventual adquisición de los mismos quedará supeditada a la aceptación de DEL RÍO. La aceptación de cada Solicitud de Servicio se producirá mediante la provisión del Servicio en cuestión. El acceso al Servicio de la red por primera vez implica la aceptación de los presentes Términos y Condiciones, sin perjuicio de la aceptación mediante la firma de la solicitud, vía mail u otras formas que se prevean para cada producto o servicio específico.",
      },
      {
        numero: 23,
        texto: "El CLIENTE podrá ceder los derechos y obligaciones emergentes de los presentes Términos y Condiciones y de la/s Solicitud/es de Servicio/s que los integran, previa notificación fehaciente y aceptación expresa por parte de DEL RÍO. La cesión podrá instrumentarse mediante: a) la presentación efectuada por el cesionario de un instrumento que demuestre de forma inequívoca la voluntad del CLIENTE de ceder el contrato, con certificación de la firma de éste por autoridad bancaria, judicial, policial o notarial; o b) la concurrencia personal del cedente y del cesionario a las oficinas comerciales del PRESTADOR, a efectos de suscribir la cesión contractual. En ambos casos, la cesión del contrato sólo se perfeccionará con la aceptación expresa o tácita del PRESTADOR. Para dicha aceptación, el cedente deberá cancelar hasta el día de la cesión todos los montos impagos, y hasta tanto ello no suceda, se mantendrán vigentes los presentes Términos y Condiciones contractuales entre el cedente y DEL RÍO.",
      },
      {
        numero: 24,
        texto: "Se prohíbe al CLIENTE utilizar el Servicio para la comisión de ilícitos penales, el envío de publicidad no solicitada (spamming), o para vulnerar la legislación en materia de propiedad intelectual, patentes y marcas.",
      },
      {
        numero: 25,
        texto: "Queda expresamente prohibido el envío masivo de correos electrónicos con contenido publicitario o comercial, y/o sin que los destinatarios hayan solicitado su recepción (\"Spam\"). Se considerará que el CLIENTE incurre en esta conducta cuando DEL RÍO reciba una queja de un tercero por haber recibido material no deseado o no solicitado proveniente del CLIENTE. En tal caso, DEL RÍO podrá ejercer los derechos que le confieren estas condiciones frente al incumplimiento del CLIENTE. Sin perjuicio de ello, el CLIENTE se obliga a mantener indemne a DEL RÍO de cualquier reclamo relacionado con el contenido de los correos electrónicos enviados por el CLIENTE. Esta medida busca asegurar la prestación adecuada del Servicio y evitar congestiones que puedan afectar su normal funcionamiento.",
      },
      {
        numero: 26,
        texto: "Excepto en productos diseñados por DEL RÍO específicamente para múltiples conexiones simultáneas, el servicio de internet es para uso exclusivo de un solo CLIENTE a la vez, quedando expresamente prohibida la utilización de \"proxy servers\" u otras tecnologías que multiplexen una dirección IP en múltiples direcciones. La asignación de direcciones IP en planes residenciales se realiza de forma dinámica.",
      },
      {
        numero: 27,
        texto: "Considerando la complejidad del Servicio y que su prestación depende de servicios y/o facilidades ajenos a DEL RÍO, éste no garantiza velocidades máximas ni promedios de navegación.",
      },
      {
        numero: 28,
        texto: "Se encuentra prohibida la comercialización, locación o sublocación del servicio, como así también compartirlo, o transferirlo a terceros.",
      },
      {
        numero: 29,
        texto: "Los dispositivos de enlace que DEL RIO pone a disposición del CLIENTE tienen como único objetivo facilitar la búsqueda de información disponible en Internet. DEL RIO no garantiza que el servicio sea adecuado para la realización de actividades distintas a las contratadas ni que permita el acceso a todos los sitios web. Asimismo, DEL RIO no ofrece ni comercializa los productos o servicios disponibles en los sitios enlazados, ni asume responsabilidad alguna por ellos.",
      },
      {
        numero: 30,
        texto: "DEL RIO actúa exclusivamente como prestador del servicio y no controla el uso que el CLIENTE haga del mismo. Por lo tanto, DEL RIO no se responsabiliza por el uso o los contenidos que, en contravención a las leyes o a estas condiciones, el CLIENTE pueda realizar, siendo el CLIENTE el único responsable por las consecuencias derivadas de un uso ilícito o contrario a estas condiciones, así como por la veracidad y licitud de los contenidos publicados en páginas web personales u otros sitios.",
      },
      {
        numero: 31,
        texto: "DEL RIO ofrece un servicio residencial sin garantías ni acuerdos de niveles de servicio (SLA). Si bien hará su mejor esfuerzo para mantener la calidad y disponibilidad del Servicio, la interrupción del mismo no lo obliga a restablecer la conexión en los tiempos exigidos para servicios empresariales, comerciales o dedicados, ni a otorgar compensaciones por ello. Los servicios empresariales, comerciales y dedicados se regirán por contratos específicos que detallan las condiciones particulares de dichos servicios.o para tales fines, en el cual se especifican los detalles para dichos servicios.",
      },
      {
        numero: 32,
        texto: "La contratación del Servicio por parte del CLIENTE no implica en ningún caso la cesión de derechos en materia de Propiedad Intelectual, Patentes y Marcas por parte de DEL RIO.",
      },
      {
        numero: 33,
        texto: "DEL RIO prohíbe la utilización del Servicio de cualquier forma que, directa o indirectamente, contravenga la legislación aplicable en materia de Propiedad Intelectual, Patentes y Marcas, siendo dicha actuación y sus consecuencias responsabilidad exclusiva del CLIENTE, quien mantendrá indemne a DEL RIO en todos los casos.",
      },
      {
        numero: 34,
        texto: "DEL RIO no controla ni garantiza la infalibilidad del Servicio ni la ausencia de virus informáticos en los servicios prestados por terceros a través de su red de portales que puedan causar alteraciones en el sistema informático (software y hardware) o en los documentos y archivos electrónicos almacenados en dicho sistema. Es responsabilidad exclusiva del CLIENTE contar con las herramientas adecuadas para detectar, desinfectar y prevenir cualquier tipo de virus u otros elementos dañinos sobre los equipos informáticos conectados al Servicio. DEL RIO no se responsabiliza por daños que pudieran producirse en los equipos informáticos del CLIENTE o de terceros conectados mediante el Servicio.",
      },
      {
        numero: 35,
        texto: "DEL RIO ha adoptado todas las medidas de seguridad legalmente exigidas para proteger los datos personales suministrados por el CLIENTE; sin embargo, no puede garantizar la invulnerabilidad absoluta de sus sistemas de seguridad ni la seguridad o inviolabilidad de dichos datos durante su transmisión a través de la red. Asimismo, DEL RIO no garantiza la veracidad ni la vigencia de los datos proporcionados por el CLIENTE.",
      },
    ],
  },
  {
    id: "facturacion",
    titulo: "Facturación y aranceles",
    clausulas: [
      {
        numero: 36,
        texto: "La mora en el pago del Servicio se producirá automáticamente y de pleno derecho al vencer la fecha de pago prevista, sin necesidad de interpelación o aviso previo o fehaciente, y tal situación facultará a DEL RÍO a suspender o dar de baja el Servicio, así como a exigir el pago del total adeudado, los intereses y los cargos por mora que se hubiesen generado.",
      },
      {
        numero: 37,
        texto: "El CLIENTE se obliga al pago del/los cargos del/los servicio/s solicitados y/o del consumo proporcional efectuado en el período según corresponda, de acuerdo a los precios vigentes que declara conocer y aceptar. DEL RIO se reservará el derecho de limitar y/o suprimir bonificaciones, efectuar cambios con respecto al precio de los productos y servicios comercializados.",
      },
      {
        numero: 38,
        texto: "El CLIENTE se obliga al pago del abono por la utilización del servicio según los precios vigentes al momento de la emisión de la factura, los cuales declara conocer y aceptar por el hecho de utilizar el servicio, salvo lo indicado en el punto anterior. A dichos precios se les adicionará el Impuesto al Valor Agregado (I.V.A.) en la medida de su incidencia y/o cualquier otro impuesto que en el futuro se cree o lo reemplace.",
      },
      {
        numero: 39,
        texto: "El pago de la factura deberá realizarse dentro de los plazos de vencimiento indicados en la misma, mediante cualquiera de las formas de pago que DEL RÍO acepte.",
      },
      {
        numero: 40,
        texto: "El CLIENTE que hubiese sido desconectado por falta de pago podrá acceder a la reanudación del/los Servicios mediante la cancelación de la deuda, los intereses, los cargos por mora que se hubiesen generado y el cargo de reconexión vigente, según lo establecido en las nuevas condiciones de la Solicitud de Contrato.",
      },
      {
        numero: 41,
        texto: "En caso de que por causas técnicas del aparato y/o del sistema de recepción el CLIENTE no reciba la señal o la reciba deficientemente, ello no impedirá que DEL RÍO perciba íntegramente el precio del abono si ya fue firmada la conformidad en la orden de instalación.",
      },
      {
        numero: 42,
        texto: "Los abonos de los planes podrán ser modificados y/o actualizados por DEL RÍO, sin aviso previo, al momento de emisión de la factura correspondiente.",
      },
      {
        numero: 43,
        texto: "La mora será automática por el solo vencimiento del plazo y devengará un interés igual a una vez y media la tasa de interés promedio mensual del Banco de la Nación Argentina para operaciones en descubierto.",
      },
      {
        numero: 44,
        texto: "La falta de pago en término facultará a DEL RIO a la inmediata suspensión del servicio hasta la fecha de pago efectivo, más los intereses correspondientes, el cargo administrativo y el cargo correspondiente a la reconexión del servicio, los cuales se verán reflejados en la primera o segunda factura posterior al evento del pago.",
      },
      {
        numero: 45,
        texto: "Si dicho pago no se efectiviza dentro de los quince (15) días corridos desde la fecha de vencimiento, DEL RIO podrá resolver las presentes condiciones sin comunicación previa, debiendo el CLIENTE abonar la deuda pendiente más los intereses correspondientes.",
      },
      {
        numero: 46,
        texto: "El alta en el servicio tendrá un cargo de instalación único. DEL RIO se reserva el derecho de bonificar dicho cargo.",
      },
      {
        numero: 47,
        texto: "El costo de instalación para la prestación del servicio será informado al momento de la instalación del SERVICIO y se facturará de forma independiente, debiendo ser abonado en su totalidad antes de la prestación del mismo por parte de DEL RIO..",
      },
      {
        numero: 48,
        texto: "En caso de cambios de domicilio, el CLIENTE deberá abonar un cargo fijado por DEL RIO. DEL RIO se reserva el derecho a bonificar dicho cargo.",
      },
      {
        numero: 49,
        texto: "Si DEL RÍO prestase servicios gratuitos, estos podrán dejar de prestarse sin previo aviso, sin que el CLIENTE tenga derecho a indemnización por daños y perjuicios.",
      },
      {
        numero: 50,
        texto: "La factura será enviada por DEL RÍO mediante medios electrónicos con una anticipación de diez (10) días a su vencimiento, y podrá ser visualizada e impresa desde el sitio web del proveedor. Todo pago posterior a la fecha de vencimiento consignada en la factura generará intereses y, en su caso, cargos adicionales por gestión de cobro administrativo que serán adicionados en la facturación siguiente. La tarifa se facturará a partir de la fecha de instalación y puesta en marcha del servicio, facturándose el período comprendido entre dicha fecha y fin de mes como “proporcionales” y a los valores de tarifa vigentes al momento de facturación.",
      },
      {
        numero: 51,
        texto: "El CLIENTE autoriza a DEL RÍO a facturar todos los cargos en forma mensual y pagaderos por adelantado, exceptuando aquellos conceptos excluidos en la/s solicitud/es de servicio/s correspondientes y los impuestos y/o tasas nacionales, provinciales, municipales y servicios existentes y/o cualquier otro que en el futuro se establezca. DEL RÍO aplicará al/los servicio/s los precios vigentes, los cuales, según su naturaleza, podrán ser facturados en períodos posteriores y en la medida en que la información sea recibida por DEL RÍO.",
      },
      {
        numero: 52,
        texto: "El impuesto al valor agregado (IVA) o el que lo reemplace en el futuro, así como cualquier otro impuesto que corresponda, se adicionará a todos los importes por los servicios prestados por DEL RÍO cuando corresponda. La emisión de facturas, notas de débito y/o crédito se realizará cumpliendo con las disposiciones impositivas vigentes. El impuesto de sellos, de corresponder, será abonado por el CLIENTE.",
      },
      {
        numero: 53,
        texto: "Si la condición del CLIENTE fuera “CONSUMIDOR FINAL”, éste se obliga expresamente a entregar a DEL RÍO la documentación correspondiente según lo expuesto en la cláusula Información Presentada. Si la condición impositiva del CLIENTE fuese distinta de “Consumidor Final”, se consultará la misma en la página web de la Administración Federal de Ingresos Públicos (AFIP), la cual será considerada para la futura facturación. El CLIENTE se compromete a presentar toda otra documentación relacionada con su situación tributaria frente a impuestos nacionales, provinciales y/o municipales que pudieran corresponder, así como a comunicar a DEL RÍO cualquier modificación futura de dicha situación. En caso de no ser posible realizar la consulta mencionada en las páginas web, el CLIENTE deberá dirigirse, conforme lo dispuesto por el art. 5 de la RG AFIP N° 1817/05 (modificatorias y complementarias), a la agencia de la Administración Federal de Ingresos Públicos donde esté inscripto, para solicitar la constancia de su situación impositiva firmada por juez administrativo y entregarla a DEL RÍO; de no hacerlo, DEL RÍO considerará la situación del CLIENTE frente al IVA como sujeto no categorizado en el impuesto, hasta tanto regularice dicha situación.",
      },
      {
        numero: 54,
        texto: "El CLIENTE declara conocer que los medios y formas de pago, así como las entidades habilitadas para tal fin, están detallados en las facturas emitidas por DEL RÍO y en los distintos canales de atención al CLIENTE de DEL RÍO. El CLIENTE no podrá invocar como causal eximente de la mora el no haber recibido la/s factura/s, cuya/s copia/s estará/n disponible/s en los canales de atención al CLIENTE de DEL RÍO en cada vencimiento. Asimismo, el CLIENTE será exclusivamente responsable por la existencia y exactitud del domicilio constituido, tanto postal como electrónico. DEL RÍO podrá negarse a recibir pagos parciales; dicho pago parcial no libera al CLIENTE de su obligación y habilita a DEL RÍO a reclamar la suma no abonada con los ajustes correspondientes. Los saldos impagos generarán intereses por mora que serán incluidos en las facturas siguientes.",
      },
      {
        numero: 55,
        texto: "En caso de no abonar en término la/s factura/s devengada/s por la utilización del/los servicio/s, DEL RÍO podrá actuar conforme a lo previsto en el Capítulo IX de la Resolución 733-E/2017 del Ministerio de Modernización (Reglamento de Clientes de los Servicios de Tecnologías de la Información y las Comunicaciones). La mora se producirá automáticamente y de pleno derecho, sin necesidad de interpelación o notificación alguna, devengándose desde esa fecha los intereses por mora determinados según la tasa aplicable o los gastos administrativos según corresponda, según el servicio contratado. La factura impaga será instrumento suficiente para reclamar judicialmente el pago adeudado. Asimismo, DEL RÍO podrá informar la condición de moroso del CLIENTE, los importes adeudados y demás circunstancias relacionadas con la deuda a registros, bases de datos financieros y centrales de riesgo crediticio con los que mantenga convenio vigente, sin que ello genere responsabilidad alguna a DEL RÍO ni derecho a indemnización para el CLIENTE..",
      },
      {
        numero: 56,
        texto: "La vigencia del/los servicio/s solicitados comenzará con la aceptación por parte de DEL RÍO y tendrá duración indeterminada; el CLIENTE se compromete a abonar el/los servicio/s desde la fecha de adquisición, pudiendo rescindirlos a su elección mediante el mismo medio utilizado para la solicitud. DEL RÍO actuará conforme al Reglamento de Clientes de los Servicios de Tecnologías de la Información y las Comunicaciones (Resolución 733-E/2017 del Ministerio de Modernización) y podrá rescindir la prestación de los servicios provistos sin invocar causa, notificando fehacientemente al CLIENTE con treinta (30) días corridos de antelación.",
      },
      {
        numero: 57,
        texto: "DEL RÍO se reserva el derecho de suspender temporalmente el servicio de forma inmediata en caso de falta de pago por parte del CLIENTE de alguna cuota mensual; si transcurren quince (15) días desde dicha suspensión sin que el CLIENTE haya saldado las cantidades adeudadas, DEL RÍO podrá dar por finalizado el servicio y resolver el vínculo contractual por causa imputable al CLIENTE. Para solicitar la rehabilitación del servicio tras la baja, el CLIENTE deberá abonar un costo de reconexión conforme a la política comercial de DEL RÍO. Si luego de treinta (30) días de la baja del servicio, ya sea por esta cláusula o por solicitud del CLIENTE, persistieran facturas impagas y el CLIENTE haya sido debidamente notificado mediante la recepción de dichas facturas, DEL RÍO podrá comunicar esta situación a bases de datos de informes de riesgo crediticio, para lo cual el CLIENTE presta su expresa autorización.",
      },
      {
        numero: 58,
        texto: "EL CLIENTE que haya sido desconectado por falta de pago podrá reanudar el Servicio únicamente mediante la cancelación total de la deuda y el pago del servicio de reconexión; este mismo requisito se aplicará en domicilios donde, según el sistema de DEL RÍO, se registre deuda de CLIENTES, no permitiéndose la conexión del servicio hasta que se efectúe el pago total de dicha deuda.",
      },
    ],
  },
  {
    id: "obligaciones-cliente",
    titulo: "Obligaciones del cliente",
    clausulas: [
      {
        numero: 59,
        texto: "El ABONO es el monto predeterminado que debe pagar el CLIENTE en forma periódica en concepto de disponibilidad del servicio en condiciones de uso, independientemente de su utilización efectiva. El abono se pagará mensualmente en los lugares y modalidades habilitados por DEL RÍO. El ABONO podrá ser ajustado mensualmente. DEL RÍO podrá modificar las condiciones de comercialización y/o los mecanismos de ajuste de sus tarifas o de facturación en cualquier momento. Si por alguna circunstancia el CLIENTE no recibiera la factura, deberá informarlo a DEL RÍO antes del día 8 (ocho) de cada mes y abonar la misma para evitar recargos u otros inconvenientes.",
      },
      {
        numero: 60,
        texto: "El pago del cargo de instalación corresponde por domicilio. En caso de que el CLIENTE se mudare, deberá comunicar el cambio de domicilio con treinta (30) días corridos de antelación y pagar los gastos de la nueva instalación.",
      },
      {
        numero: 61,
        texto: "El CLIENTE autoriza a fijar en su propiedad los elementos necesarios para la instalación, los cuales son exclusiva propiedad de DEL RÍO. Asimismo, el CLIENTE no podrá cambiar, modificar ni realizar servicios técnicos por su cuenta sobre dichos elementos.",
      },
      {
        numero: 62,
        texto: "El CLIENTE recibe los materiales y elementos de DEL RÍO para la prestación de los servicios en calidad de depositario, comprometiéndose a devolverlos en caso de cese del servicio o por cambio de domicilio, sin necesidad de interpelación fehaciente alguna y a solo requerimiento de DEL RÍO, conforme a los artículos 1058, 1356 y concordantes del Código Civil y Comercial.",
      },
      {
        numero: 63,
        texto: "El CLIENTE utilizará los servicios únicamente dentro del domicilio denunciado como de instalación y en la cantidad de bocas contratadas, comprometiéndose a no distribuir, comercializar bajo ninguna forma jurídica, ampliar y/o trasladar por sí mismo los servicios que presta DEL RÍO en su domicilio. El CLIENTE acepta expresamente la prohibición de realizar conexiones y/o instalaciones por su cuenta sin intervención de DEL RÍO, así como la prohibición de permitir que terceros utilicen el servicio en forma no autorizada o clandestina. La violación de estas obligaciones facultará a DEL RÍO a facturar al CLIENTE una penalidad equivalente a diez (10) abonos básicos vigentes al momento en que tal conducta irregular sea detectada y/o a proceder a suspender o finalizar los servicios, sin perjuicio del inicio de las acciones legales que correspondan.",
      },
      {
        numero: 64,
        texto: "El CLIENTE asume plena responsabilidad frente a DEL RÍO y a terceros por los daños y perjuicios de toda clase que puedan generarse como consecuencia de su accionar propio, de sus dependientes y/o de terceros vinculados al/los Servicio/s; así como por los derivados de los equipos, medios o sistemas de los que ellos se sirvan, y por los daños que resulten de la inobservancia de las leyes, reglamentaciones u otros hechos ilícitos. El CLIENTE deberá resarcir y mantener indemne a DEL RÍO ante cualquier reclamo que pudiera corresponder en los supuestos indicados. En caso de utilización del/los Servicio/s por terceros, el CLIENTE deberá instruirlos adecuadamente y responderá frente a DEL RÍO por el mal uso del mismo, entendiéndose por tal toda contravención a lo establecido en los presentes Términos y Condiciones, en la normativa legal vigente, la moral, las buenas costumbres generalmente aceptadas y el orden público. En tal supuesto, DEL RÍO podrá reclamar los daños y perjuicios irrogados.",
      },
      {
        numero: 65,
        texto: "En todos los casos, la puesta a tierra de los Equipos deberá estar en concordancia con las reglamentaciones eléctricas locales. En caso de incumplimiento por parte del CLIENTE, será de aplicación lo dispuesto en los artículos 1536 y 1733 del Código Civil y Comercial.",
      },
      {
        numero: 66,
        texto: "En caso de robo o hurto de los Equipos, el CLIENTE deberá denunciar dicha circunstancia a DEL RÍO dentro del plazo de quince (15) días contados desde ocurrido el hecho. En este caso, DEL RÍO podrá facturar al CLIENTE el valor de los Equipos al momento de efectuada la denuncia y/o al momento en que DEL RÍO tome conocimiento del hecho sin que previamente haya sido denunciado por el CLIENTE.",
      },
      {
        numero: 67,
        texto: "El CLIENTE deberá indemnizar a DEL RÍO y a cualquier otro tercero por los daños y perjuicios ocasionados como consecuencia del uso indebido del servicio, tanto por parte del CLIENTE como de sus agentes, empleados o personas vinculadas.",
      },
      {
        numero: 68,
        texto: "El ingreso y uso de la clave de acceso es responsabilidad exclusiva del CLIENTE, quien deberá mantenerla en estricta confidencialidad, asumiendo toda responsabilidad por cualquier uso del Servicio realizado por terceros debido a la divulgación de dicha contraseña.",
      },
      {
        numero: 69,
        texto: "El CLIENTE se compromete a usar responsablemente el/los Servicio/s de DEL RIO, evitando prácticas que, aunque no estén expresamente prohibidas, puedan degradar la disponibilidad del servicio para otros CLIENTES, violar derechos públicos o privados, o causar perjuicio directo o indirecto a DEL RIO. Se considerarán incumplimientos de esta cláusula, entre otros, el envío masivo de mensajes no solicitados (spam) según lo establecido en los sitios de DEL RIO, la realización de comunicaciones con patrones de tráfico que indiquen uso fraudulento del servicio, y la manipulación de cualquiera de los parámetros de la comunicación..",
      },
      {
        numero: 70,
        texto: "El CLIENTE reconoce que todas las imágenes, diseños, dibujos, contenidos, logos, marcas y cualquier otro producto protegido por la legislación vigente en materia de Propiedad Intelectual, Patentes y Marcas, a los que acceda mediante la suscripción del servicio, son propiedad de terceros titulares legítimos, y se compromete a utilizar el servicio respetando dichos derechos.",
      },
      {
        numero: 71,
        texto: "El CLIENTE se compromete, en caso de tormenta y/o descarga eléctrica, a desconectar el equipo, liberando de toda responsabilidad a REDES DEL RÍO S.A.S. y/o DEL RÍO por cualquier daño ocasionado a bienes y/o personas.",
      },
      {
        numero: 72,
        texto: "El CLIENTE deberá hacerse cargo de todos los gastos que le demande la conservación en buen estado de los equipos.",
      },
      {
        numero: 73,
        texto: "El CLIENTE será responsable por los desperfectos técnicos y roturas que puedan sufrir los Equipos, siempre que no se sigan del uso normal de los mismos, razón por la cual afrontará en tales casos el costo de su reparación de acuerdo con el dictamen técnico que a tal efecto emita DEL RÍO, quien podrá exigir el importe equivalente al 100% de los cargos incurridos.",
      },
      {
        numero: 74,
        texto: "El CLIENTE se obliga a mantener indemne a DEL RÍO frente a cualquier reclamo, demanda y/o sanción que pudiera originarse a raíz de los daños mencionados en el párrafo precedente.",
      },
      {
        numero: 75,
        texto: "Obligaciones del CLIENTE: Desde la Fecha de Activación del Servicio, el CLIENTE estará obligado a pagar la tarifa o abono del Servicio según el plan contratado, conforme a los cargos vigentes al momento del uso y a los que establezca DEL RÍO; y a no utilizar el Servicio en contravención de la ley o de estos Términos y Condiciones.",
      },
      {
        numero: 76,
        texto: "El CLIENTE es responsable del buen uso de la conexión y deberá evitar cualquier acción que pueda dañar sistemas, Equipos o servicios accesibles directa o indirectamente a través de Internet, incluyendo la congestión intencional de enlaces o sistemas, conforme a lo establecido en estos Términos y Condiciones.",
      },
      {
        numero: 77,
        texto: "En consecuencia, el CLIENTE se obliga a mantener indemne a DEL RÍO frente a cualquier reclamo, demanda y/o sanción que pudiera originarse a raíz de los daños mencionados en el párrafo precedente.",
      },
      {
        numero: 78,
        texto: "Obligaciones del CLIENTE: Desde la Fecha de Activación del Servicio, el CLIENTE estará obligado a pagar la tarifa o abono del Servicio según el plan contratado, conforme a los cargos vigentes al momento del uso y a los que establezca DEL RÍO; y a no utilizar el Servicio en contravención de la ley o de estos Términos y Condiciones.",
      },
      {
        numero: 79,
        texto: "El CLIENTE es responsable del buen uso de la conexión y deberá evitar cualquier acción que pueda dañar sistemas, Equipos o servicios accesibles directa o indirectamente a través de Internet, incluyendo la congestión intencional de enlaces o sistemas, conforme a lo establecido en estos Términos y Condiciones.",
      },
      {
        numero: 80,
        texto: "El CLIENTE permitirá que DEL RIO inserte en los Equipos dados en comodato las marcas e identificaciones necesarias para dejar manifiesto su carácter de propietario, las cuales deberán conservarse en forma permanente durante la vigencia del Contrato de Comodato y no podrán ser tapadas ni dificultarse su lectura de ningún modo. Asimismo, el CLIENTE deberá abstenerse de agregar inscripciones de cualquier tipo sobre los Equipos.",
      },
      {
        numero: 81,
        texto: "El CLIENTE deberá hacerse cargo de todos los gastos que le demande la conservación en buen estado de los equipos.",
      },
      {
        numero: 82,
        texto: "El CLIENTE será responsable por los desperfectos técnicos y roturas que puedan sufrir los Equipos, siempre que no se sigan del uso normal de los mismos, razón por la cual afrontará en tales casos el costo de su reparación de acuerdo con el dictamen técnico que a tal efecto emita DEL RIO, quien podrá exigir el importe equivalente al 100% de los cargos incurridos.",
      },
      {
        numero: 83,
        texto: "Es obligación del CLIENTE guardar y custodiar las claves de acceso y el identificador facilitados por DEL RÍO. El CLIENTE asume toda responsabilidad por los daños y/o perjuicios de cualquier tipo que se deriven del quebrantamiento o divulgación de dichas contraseñas.",
      },
      {
        numero: 84,
        texto: "El CLIENTE no modificará la instalación del servicio realizada por el personal técnico de DEL RÍO. En caso de solicitar servicio técnico a domicilio por inconvenientes cuya causa no sea atribuible a DEL RÍO, el CLIENTE se compromete a abonar la tarifa vigente en ese momento, más el importe correspondiente a materiales, si correspondiere. Asimismo, autoriza expresamente la fijación de materiales en elementos de su propiedad para la instalación del Servicio. Además, el CLIENTE exime a DEL RÍO de responsabilidad por fallas o daños provocados por descargas eléctricas de la línea 220V en relación con los equipos utilizados para la prestación del Servicio.",
      },
      {
        numero: 85,
        texto: "Obligaciones del CLIENTE: En caso de baja del servicio, por cualquier causa, el CLIENTE deberá entregar en perfecto estado de uso el equipamiento y demás elementos proporcionados por DEL RÍO para la prestación del Servicio, antes del día 25 de cada mes. Si el equipamiento no es devuelto o no se encuentra en perfecto estado de uso y conservación, el CLIENTE deberá abonar a DEL RÍO una indemnización equivalente a U$S 100 (cien dólares estadounidenses) más IVA, importe que podrá pagarse en pesos según la cotización del mercado libre de cambios tipo vendedor del día anterior al pago. Este mismo importe será exigible en caso de pérdida, robo, hurto, destrucción o cualquier desperfecto no imputable a DEL RÍO que impida el normal funcionamiento del equipamiento, independientemente de si se mantiene o no el servicio activo.",
      },
      {
        numero: 86,
        texto: "El CLIENTE releva a DEL RÍO de la obligación prevista en el artículo 1 de la Ley 25.690, la cual establece que los proveedores de servicios de Internet (ISP) deben ofrecer software de protección que impida el acceso a ciertos sitios al momento de contratar el servicio, independientemente de la forma en que se perfeccione el contrato (telefónica o escrita).",
      },
      {
        numero: 87,
        texto: "Es obligación del CLIENTE custodiar y evitar daños en los equipos entregados en comodato por DEL RÍO.",
      },
      {
        numero: 88,
        texto: "En caso de que el CLIENTE niegue autorización al personal designado por DEL RÍO para el retiro de los elementos, y hasta el efectivo retiro y recepción por parte de DEL RÍO, el CLIENTE deberá abonar, además de la tarifa, un interés punitorio en concepto de cláusula penal, quedando acreditado el retiro y recepción únicamente mediante acta firmada por DEL RÍO.",
      },
      {
        numero: 89,
        texto: "El CLIENTE autoriza expresamente a DEL RÍO, en caso de falta de pago de la tarifa y cumplimiento de las condiciones aquí establecidas, a proporcionar sus datos a VERAZ, CODESA, CODEME u otras instituciones similares, y a que dichas entidades compartan la información con sus asociados, conforme a lo dispuesto en la Ley de Protección de Datos Personales N° 25.326.",
      },
      {
        numero: 90,
        texto: "El CLIENTE es responsable del mantenimiento del soporte informático necesario para acceder a la red, debiendo contar con software original.",
      },
      {
        numero: 91,
        texto: "El CLIENTE asume plena responsabilidad frente a DEL RÍO y terceros por daños y perjuicios que se produzcan como consecuencia de su accionar, de sus dependientes o de terceros que utilicen el Servicio a través del CLIENTE, así como por la inobservancia de leyes, reglamentaciones u otros hechos ilícitos o mal uso del Servicio, debiendo indemnizar y mantener indemne a DEL RÍO ante cualquier reclamo relacionado.",
      },
    ],
  },
  {
    id: "obligaciones-del-rio",
    titulo: "Obligaciones de Del Río",
    clausulas: [
      {
        numero: 92,
        texto: "Si el CLIENTE solicitara otro Equipo para continuar con la prestación del servicio, DEL RÍO entregará, siempre que considere necesario el pedido, un Equipo semejante de la misma calidad en comodato, que se regirá por las condiciones previstas en los presentes Términos y Condiciones Contractuales.",
      },
      {
        numero: 93,
        texto: "DEL RÍO proveerá un servicio de asistencia técnica telefónica y/o un servicio de asistencia técnica a domicilio. En caso de que el CLIENTE solicite la asistencia de personal técnico en su domicilio, DEL RÍO podrá aplicar el cargo correspondiente.",
      },
      {
        numero: 94,
        texto: "DEL RÍO se compromete a prestar el Servicio al CLIENTE conforme a las condiciones estipuladas en el presente documento, dejando expresamente aclarado que la velocidad de navegación provista será de “hasta” la establecida en el paquete contratado. Dado que los servicios de banda ancha tradicionales funcionan bajo un esquema de conexión compartida, es posible que, durante horarios de alta demanda o congestión de red, no se alcance de manera constante la velocidad máxima esperada. Asimismo, el servicio estándar es asimétrico, lo que significa que la velocidad de descarga será superior a la de subida, y la velocidad publicitada en cada paquete refiere únicamente a la velocidad de descarga. En caso de que el CLIENTE requiera una conexión con velocidad garantizada, estable, homogénea y/o simétrica —es decir, con igual capacidad de subida y bajada— se sugiere la contratación de un paquete especial de internet dedicado, orientado al uso exclusivo por parte del CLIENTE.",
      },
      {
        numero: 95,
        texto: "Es obligación de DEL RÍO mantener el Servicio operativo las veinticuatro (24) horas del día, salvo interrupciones temporales derivadas de operaciones de mantenimiento, las cuales serán comunicadas al CLIENTE, en la medida de lo posible, con la antelación suficiente por cualquier medio disponible de DEL RÍO. Esta obligación no será exigible a DEL RÍO en caso de fuerza mayor ajena a su voluntad y control.",
      },
      {
        numero: 96,
        texto: "Es obligación de DEL RÍO prestar el servicio de Atención al CLIENTE dentro de los horarios comunicados, con el fin de recibir y resolver los reclamos formulados por los CLIENTES, los cuales serán atendidos en los siguientes plazos: a) reclamos por deficiencias e interrupción del servicio, en un plazo máximo de tres (3) días hábiles; b) reclamos por facturación, en un plazo máximo de cinco (5) días hábiles; y c) otros reclamos, en un plazo máximo de diez (10) días hábiles.",
      },
      {
        numero: 97,
        texto: "Es obligación de DEL RÍO mantener y garantizar el secreto en las comunicaciones, salvo en casos de requerimiento por parte de autoridad judicial y/o gubernamental, en cuyo supuesto se reserva el derecho de facilitar la información solicitada sin previo aviso al CLIENTE..",
      },
      {
        numero: 98,
        texto: "Es obligación de DEL RÍO prestar al CLIENTE el servicio de apoyo e información acerca de los requisitos de funcionamiento o problemas generales en el uso del Servicio. En los productos o servicios donde se indique que esta prestación es opcional y no está incluida en el precio, el servicio será facturado al CLIENTE conforme a los precios que se establezcan en cada caso.",
      },
      {
        numero: 99,
        texto: "DEL RÍO tendrá el derecho de ampliar o mejorar el Servicio prestado, así como de alterar los medios o rutas utilizados para su prestación.",
      },
    ],
  },
  {
    id: "responsabilidades",
    titulo: "Responsabilidades",
    clausulas: [
      {
        numero: 100,
        texto: "El CLIENTE será responsable ante DEL RÍO por todo acto propio y/o de terceros que pueda afectar de algún modo la situación de hecho y/o de derecho de los Equipos. Cuando tales actos y/o hechos impidan el normal uso y/o disposición material y/o jurídica de los Equipos.",
      },
      {
        numero: 101,
        texto: "El CLIENTE se responsabiliza por las consecuencias derivadas del uso del Servicio cuando éste se realice en violación de los derechos de terceros y/o atente contra su privacidad; asimismo, será responsable por todo el contenido que se envíe a través de las casillas de correo asignadas. En caso de utilización del Servicio por terceros, el CLIENTE responderá frente a DEL RÍO por el uso que se haga del mismo. Dado que la prestación del Servicio de DEL RÍO depende también de recursos y servicios contratados con terceros, DEL RÍO declina toda responsabilidad por daños o perjuicios causados por hechos atribuibles a terceros. DEL RÍO no será responsable por errores de encaminamiento, pérdida de información o datos, retrasos en la entrega o interrupciones no planificadas del Servicio que no le sean imputables. Asimismo, DEL RÍO declina responsabilidad sobre la calidad, exactitud, fiabilidad y corrección de los datos, programas e información que circulen por sus redes (incluyendo virus, software defectuoso o uso indebido de programas), siendo dicho contenido exclusiva responsabilidad de quienes lo intercambien (remitente y destinatario). DEL RÍO no responderá por el uso del Servicio por terceros no autorizados.",
      },
      {
        numero: 102,
        texto: "En caso de que los Equipos sean dados en comodato al CLIENTE por parte de DEL RÍO (en su condición de prestador del Servicio de Acceso a Internet – ISP), el CLIENTE recibe en carácter de comodatario (conforme a los artículos 1533 y siguientes del Código Civil y Comercial) los Equipos de DEL RÍO para acceder al Servicio de Internet. Los Equipos se entregan en perfecto estado de uso y conservación. Toda circunstancia no prevista en estas Condiciones se regirá por las disposiciones contenidas en el Código Civil y Comercial, Libro Tercero, Título IV, Capítulo 21 – Comodato. Los Equipos deberán ser destinados exclusivamente a su utilización para servicios prestados por DEL RÍO, y su uso estará permitido solamente al CLIENTE, no pudiendo ser entregados y/o transferidos a terceros bajo ningún título o circunstancia, aunque sea accidental o temporalmente, sin previa notificación fehaciente y aceptación expresa por parte de DEL RÍO. El CLIENTE no podrá dar a los Equipos un uso distinto al señalado en el presente punto. En caso contrario, DEL RÍO podrá: a. exigir la restitución inmediata de los mismos y la reparación de los perjuicios que se le hubiesen causado; b. de no cumplirse lo expuesto en el punto anterior, proceder a la facturación de los Equipos a nombre del CLIENTE y a su valor de mercado. Los Equipos serán instalados y deberán permanecer bajo la guarda del CLIENTE en el domicilio de su instalación. Tal ubicación sólo podrá modificarse con la debida autorización previa y por escrito de DEL RÍO, previa notificación fehaciente, en caso que corresponda y bajo la condición de cumplimiento de los requisitos de admisibilidad por parte del CLIENTE. El comodato tendrá vigencia desde la entrega de los Equipos al CLIENTE.",
      },
    ],
  },
  {
    id: "exenciones",
    titulo: "Exenciones de responsabilidad",
    clausulas: [
      {
        numero: 103,
        texto: "El cumplimiento de los siguientes requisitos es indispensable y necesario para la prestación del Servicio. El personal de DEL RÍO, debidamente identificado, tendrá acceso al domicilio del CLIENTE para realizar la instalación, desconexión, mantenimiento y/o control del Servicio, así como para verificar el cumplimiento de los requisitos previos, no responsabilizándose DEL RÍO por hechos producidos por personas ajenas a su organización. Asimismo, el CLIENTE autoriza expresamente la inspección periódica de la instalación domiciliaria del Servicio por parte del personal debidamente autorizado de DEL RÍO.",
      },
      {
        numero: 104,
        texto: "DEL RIO queda eximido de responsabilidad en caso de no poder efectuar la instalación por imposibilidades de orden público, técnico, prohibición del consorcio o administración, u otros factores que le sean ajenos. .",
      },
      {
        numero: 105,
        texto: "DEL RÍO no se responsabiliza por defectos de funcionamiento del aparato receptor de los servicios. Los mismos deberán cumplir con las normas técnicas dictadas por la Secretaría de Comunicaciones u organismo pertinente. DEL RÍO se exime de responsabilidad en caso de fallas o daños provocados por descargas eléctricas de la línea 220V en el aparato receptor.",
      },
      {
        numero: 106,
        texto: "DEL RÍO no se responsabiliza por interrupciones del Servicio provenientes de casos fortuitos y/o fuerza mayor, ni por aquellas debidas a reparaciones o modificaciones necesarias en la instalación o en la red.",
      },
      {
        numero: 107,
        texto: "DEL RÍO queda exonerada de toda responsabilidad por cualquier daño que pudiera sufrir el CLIENTE, sus dependientes y/o terceros, vinculado y/o derivado del deterioro y/o uso inapropiado de los Equipos, siempre que la causa no sea imputable de forma directa a DEL RÍO.",
      },
      {
        numero: 108,
        texto: "DEL RÍO no será responsable ni deberá resarcir daño alguno, directo o indirecto, al CLIENTE y/o a terceros, causado por la recepción o emisión de correos electrónicos infectados y/o correos masivos no deseados (spam), ni por la imposibilidad de su entrega.",
      },
      {
        numero: 109,
        texto: "DEL RÍO no será responsable por daños, alteración de información o interferencias en el sistema o las redes causados por terceros.",
      },
      {
        numero: 110,
        texto: "DEL RÍO no será responsable por el resultado del servicio cuando las instalaciones necesarias para su correcto funcionamiento dependan de terceros, incluyendo errores de encaminamiento, pérdida de información o datos, retrasos en la entrega o interrupciones no planificadas del servicio.",
      },
      {
        numero: 111,
        texto: "DEL RÍO no será responsable del contenido, calidad, exactitud, fiabilidad, corrección ni utilidad de los datos, programas o información de cualquier tipo transmitidos por sus redes, siendo dicha información responsabilidad exclusiva de quienes la intercambian (remitente y destinatario).",
      },
      {
        numero: 112,
        texto: "DEL RÍO no será responsable por el mal uso de los servicios prestados, ni por fallas ocasionadas por cortes de energía, interrupciones programadas o cualquier otra causa que no sea atribuible a culpa grave o dolo de DEL RÍO.",
      },
      {
        numero: 113,
        texto: "DEL RÍO no será responsable por daños y perjuicios ocasionados a los equipos, instalaciones o personal del CLIENTE que no sean imputables a DEL RÍO.",
      },
      {
        numero: 114,
        texto: "DEL RÍO no será responsable frente al CLIENTE por daños y perjuicios ocasionados por otros clientes o terceros conectados a la red, ni por aquellos derivados de la inobservancia de leyes, reglamentaciones, hechos ilícitos o del mal uso del Servicio por parte de terceros o clientes.",
      },
      {
        numero: 115,
        texto: "El uso por parte del CLIENTE o de terceros de los servicios de la red que resulte o pueda resultar en una infracción a derechos de propiedad intelectual de terceros será responsabilidad y riesgo exclusivo del CLIENTE y/o terceros. El CLIENTE exonera a DEL RÍO de cualquier reclamo judicial o extrajudicial derivado de acciones u omisiones del CLIENTE, sus clientes, contratistas, agentes o empleados, respecto al uso de las facilidades, redes y sistemas de DEL RÍO de manera no contemplada o prohibida por este documento; así como de aquellos reclamos derivados, directa o indirectamente, de interrupciones o cortes del servicio prestado a través de facilidades, redes o sistemas de terceros, o por problemas relacionados; también exime a DEL RÍO de responsabilidad por interrupciones, programadas o no, en el suministro eléctrico o de otros servicios necesarios para el funcionamiento del Servicio; igualmente, DEL RÍO no será responsable ante el CLIENTE por daños o perjuicios, incluyendo casos fortuitos o fuerza mayor, que pudieran afectar los equipos o instalaciones del CLIENTE y/o terceros.",
      },
      {
        numero: 116,
        texto: "En ningún caso DEL RÍO será responsable por daños indirectos, lucro cesante ni por pérdidas o daños de cualquier naturaleza relacionados con la actividad del CLIENTE.",
      },
      {
        numero: 117,
        texto: "En caso de que, para la prestación del servicio de acceso a internet, sea necesario que el CLIENTE solicite a DEL RÍO, a su costo y cargo, la provisión, instalación y/o configuración de una placa de red, Unidad Óptica de Red (hardware) y/o programas (software) en su equipamiento, DEL RÍO no será responsable por la pérdida de archivos electrónicos y/o programas instalados, ni por el desconocimiento de la garantía otorgada por el fabricante del equipo o software ocasionado por dicha intervención. Será responsabilidad exclusiva del CLIENTE realizar el resguardo de su información antes de que comience cualquier intervención por parte del personal de DEL RÍO.",
      },
      {
        numero: 118,
        texto: "DEL RÍO no será responsable por fallas que pudieran producirse en las comunicaciones, incluyendo el borrado, transmisión incompleta o retrasos en la remisión, ni garantiza que la red de transmisión esté operativa en todo momento. Asimismo, DEL RÍO no responderá en caso de que un tercero, vulnerando las medidas de seguridad establecidas por DEL RÍO, acceda a los mensajes o los utilice para la remisión de virus informáticos.",
      },
      {
        numero: 119,
        texto: "DEL RIO se reserva el derecho de suspender temporal o definitivamente el Servicio sin necesidad de autorización previa del CLIENTE cuando detecte, de forma directa o a través de notificaciones o requerimientos de terceros, la existencia de contenidos que infrinjan la legalidad vigente o los presentes Términos y Condiciones, así como el uso fraudulento, ilícito o no autorizado del Servicio, incluyendo páginas web personales u otros sitios creados mediante el mismo; para tal fin podrá eliminar los contenidos infractores o adoptar cualquier otra medida que considere necesaria para evitar la continuidad de la infracción o delito detectado, y además podrá informar a las autoridades administrativas o judiciales competentes sin previo aviso al CLIENTE.",
      },
      {
        numero: 120,
        texto: "En caso de que los Equipos sean vendidos por DEL RÍO, los mismos serán entregados en propiedad al CLIENTE. Quedan excluidas las averías producidas en el Equipo como consecuencia del mal uso, maltrato, manipulaciones o defectos de instalación efectuados por personal ajeno al Servicio de Asistencia Técnica de DEL RÍO.",
      },
      {
        numero: 121,
        texto: "En caso de que los Equipos sean propiedad del CLIENTE por haberlos adquirido a un tercero distinto de DEL RÍO con anterioridad a la suscripción de las presentes, es condición necesaria para el funcionamiento del Servicio que los Equipos sean reconocidos por DEL RÍO como aptos para la correcta prestación del Servicio y compatibles con el mismo. DEL RÍO no garantiza en modo alguno el funcionamiento de los Equipos. DEL RÍO no asume ninguna clase de responsabilidad por inconvenientes o fallas en el funcionamiento del Servicio en la medida que puedan originarse en: a. problemas de funcionamiento de los Equipos o mal funcionamiento de los mismos b. inconvenientes en el funcionamiento del Servicio originados por Equipos que no cumplan – durante todo el plazo de prestación del Servicio – con las condiciones mínimas requeridas para la prestación del Servicio. En todos los casos, se incluyen tanto los inconvenientes que puedan tener los Equipos originalmente, como asimismo aquellos que eventualmente puedan surgir en el futuro, al hacerse reparaciones, reemplazo de piezas y toda otra modificación o tarea de mantenimiento que se realice sobre los Equipos. DEL RÍO no se encuentra obligada a prestar soporte técnico alguno relacionado con los Equipos o fallas en el Servicio que sean provocadas por los Equipos. Cuando personal de DEL RÍO concurra al domicilio del CLIENTE con la finalidad de realizar la instalación del Servicio, si el CLIENTE no tuviese los Equipos en su poder y disponibles para realizar la instalación, DEL RÍO verificará el estado de conexión con un equipo de su propiedad que utilizará al solo efecto de realizar dicha prueba, y en caso de obtener un resultado positivo respecto de esa prueba de conexión, el Servicio se comenzará a cobrar.",
      },
      {
        numero: 122,
        texto: "DEL RIO no será responsable por la conexión de accesorios que no sean de su provisión y que no estén amparados por la garantía correspondiente. En consecuencia, el CLIENTE se obliga a mantener los dispositivos tecnológicos provistos en óptimas condiciones de funcionamiento y a notificar a Del Río de inmediato cualquier desperfecto que perjudique la normal prestación del/los servicio/s.",
      },
    ],
  },
  {
    id: "baja",
    titulo: "Baja del servicio",
    clausulas: [
      {
        numero: 123,
        texto: "El Servicio se proveerá por un plazo indeterminado, y la vigencia de su contratación se entenderá estipulada por períodos mensuales, pudiendo el CLIENTE solicitar la baja del Servicio en cualquier momento a partir de la fecha de instalación, sin costo alguno.",
      },
      {
        numero: 124,
        texto: "En caso que el CLIENTE niegue autorización al personal designado por DEL RIO para que proceda al retiro de los elementos, y hasta su recepción efectiva por DEL RIO, aquel deberá abonar, además del abono mensual, un interés punitorio del cien por ciento (100%) mensual en concepto de cláusula penal.",
      },
      {
        numero: 125,
        texto: "DEL RÍO se reserva el derecho de dar de baja una conexión en cualquier momento cuando el CLIENTE haya incumplido con las obligaciones previstas en los presentes Términos y Condiciones.",
      },
      {
        numero: 126,
        texto: "En caso de finalización del comodato por cualquier causa y si el CLIENTE no pusiera a disposición de DEL RÍO los Equipos, y/o no hubiera denunciado el robo de los mismos, y/o no abonara su valor en caso de corresponder, DEL RÍO podrá iniciar las acciones extrajudiciales y judiciales pertinentes a fin de obtener la restitución y/o cobro del valor de los Equipos, incluyendo las acciones penales y la indemnización por los daños y perjuicios que pudiere corresponder.",
      },
      {
        numero: 127,
        texto: "El CLIENTE podrá solicitar la baja del servicio en cualquier momento y sin costo alguno; una vez efectiva la baja, deberá entregar el equipamiento antes del día 20 de cada mes en las oficinas de DEL RÍO ubicadas en Olavarría 1180, Perdriel, Mendoza, o en la sede más cercana a su domicilio si existiera; de no hacerlo dentro de ese plazo, DEL RÍO facturará el importe correspondiente a los equipos, independientemente de su entrega o de cualquier otro elemento recibido después de dicha fecha.",
      },
      {
        numero: 128,
        texto: "DEL RÍO podrá suspender o dar de baja el servicio y/o resolver el contrato de manera inmediata con el CLIENTE en caso de uso contrario a los presentes Términos y Condiciones, a los límites impuestos por la normativa legal, el orden público, la moral y las buenas costumbres; asimismo, DEL RÍO podrá dar por finalizado el contrato mediante notificación fehaciente con treinta (30) días de anticipación, sin invocación de causa y a su exclusiva decisión.",
      },
      {
        numero: 129,
        texto: "En caso de finalización del servicio, por cualquier causa, los Equipos deberán ser puestos a disposición de DEL RÍO por el CLIENTE en perfecto estado de uso y conservación antes del día 20 de cada mes, sin perjuicio del desgaste producido por el uso normal de los mismos. Si extinguida la vigencia del comodato, por cualquier causa, el CLIENTE no pusiera a disposición los Equipos a DEL RÍO, DEL RÍO podrá facturar al CLIENTE el valor de los Equipos vigente a dicha fecha y/o reclamar judicialmente el cumplimiento del contrato de comodato conforme a lo dispuesto en los artículos 1533 y siguientes del Código Civil y Comercial.",
      },
      {
        numero: 130,
        texto: "Si el CLIENTE incumple cualquiera de las condiciones de uso u obligaciones establecidas en estos Términos y Condiciones, DEL RÍO podrá suspender inmediatamente el Servicio, notificando al CLIENTE para que subsane la causa del incumplimiento. Si el CLIENTE no corrige la situación en un plazo de siete (7) días corridos, DEL RÍO podrá dar de baja el Servicio y exigir el pago de la indemnización correspondiente.",
      },
      {
        numero: 131,
        texto: "El incumplimiento de cualquiera de las obligaciones asumidas en estos Términos y Condiciones facultará a DEL RÍO a considerarlos resueltos sin necesidad de declaración judicial, debiendo el CLIENTE en tal caso restituir los equipos entregados en comodato por DEL RÍO. Esto será sin perjuicio del derecho de DEL RÍO a facturar al CLIENTE el valor de los equipos o a iniciar las acciones legales correspondientes para obtener dicha restitución e indemnización por daños y perjuicios que pudieran corresponder. DEL RÍO y el CLIENTE serán responsables de verificar y controlar la faz técnica y operativa de sus respectivas facilidades. DEL RÍO no será responsable por la utilidad que el servicio contratado preste al CLIENTE en relación con sus necesidades reales. Asimismo, DEL RÍO no responderá por daños directos o indirectos, incluyendo lucro cesante, ocasionados al CLIENTE o terceros derivados de posibles deficiencias en la prestación del servicio no imputables directamente a DEL RÍO, tales como baja velocidad de acceso a sitios de terceros, interrupciones del servicio, errores en mensajes o información obtenida, ni por daños causados por datos o material obtenido a través del servicio.",
      },
      {
        numero: 132,
        texto: "El CLIENTE podrá dar de baja cualquiera de los servicios prestados utilizando los mismos medios a través de los cuales fueron contratados.",
      },
    ],
  },
];
