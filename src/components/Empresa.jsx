function Empresa() {
	return (
		<div className="container p-5">
			<div
				className="container px-5"
				style={{
					background: "#2125298d",
					color: "white",
					borderRadius: 10,
					border: "3px solid goldenrod",
				}}>
				<h1 style={{marginBottom: 20, fontWeight: "bold"}}>Sobre Nosotros</h1>
				<p>
					GOLD NUTRITION es una empresa especializada en la investigación,
					desarrollo y comercialización de suplementos deportivos que se rigen
					por estrictos controles de calidad en cada una de sus áreas y cuya
					formulación se basa en los últimos avances científicos.
				</p>
				<p>
					Cada materia prima presente en los productos GOLD NUTRITION es
					especialmente seleccionada entre los mejores y más confiables
					laboratorios a nivel mundial.
				</p>
				<p>
					Todas nuestras formulaciones satisfacen las necesidades nutricionales
					y energéticas de atletas de alto rendimiento y personas que busquen
					mejorar su estado físico y atlético inspirándolas a alcanzar su
					verdadero potencial.
				</p>
			</div>
			<div className="container px-5">
				<h2 style={{margin: 50, fontWeight: "bold"}}>
					La satisfacción del cliente... Nuestra prioridad.
				</h2>
				<p>
					La estricta selección de materias primas, el control de calidad, las
					pruebas de laboratorio y los procesos de fabricación en GOLD NUTRITION
					Sports Supplements se realizan por una única razón: Brindar productos
					de nutrición deportiva de la más alta calidad en venta en el mercado.
					Nuestra compañía fue fundada con la misión de brindar productos de
					calidad, para lo cual trabajamos constantemente con la idea de
					establecer estándares aún más altos.
				</p>
				<p>
					NUESTRO PRINCIPAL OBJETIVO es crear productos que no sólo cumplan,
					sino que sustancialmente superen sus expectativas.
				</p>
				<p>
					Todo lo que hacemos aquí en GOLD NUTRITION se hace para garantizar que
					usted tenga la mejor experiencia, y alcance sus mejores resultados,
					siempre.
				</p>
			</div>
			<picture>
				<img
					src="https://goldnutrition.com.ar/images/2018/04/03/logo_empresa_gold_nutrition.png"
					alt="logo de marca"
				/>
			</picture>
		</div>
	);
}

export default Empresa;
