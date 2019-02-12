Vue.component('app-progress', {
	props: {
		max: Number, // равна menus.length
		val: Number // равна progressbar = индексу клика menus.length
	},
	computed: {
		width(){
			let w = +this.val / +this.max * 100;
			if (w > +this.max) {w === +this.max}
				else if(w < 0 ){w = 0;}
			return{
				width: w + '%'
			}
		}
	},
	template: `
	<div class="progress" style="height: 12px;">
	<div class="progress-bar bg-success" role="progressbar" :style="width">{{val}}</div>
	</div>
	`
});
new Vue({
	el: "#app",
	data: {
		menus: [
		{
			section: 'shape', // для смены шаблона calc должна быть на 1 месте
			desc: 'Выберите форму',
			arrs: [
			{
				series: 'pryamo',
				title: 'Прямоугольник',
				img: 'img/menu/FORM/1_square.jpg',
			},
			{
				series: 'ygol',
				title: 'Угол',
				img: 'img/menu/FORM/2_angle.jpg',
			},
			{
				series: 'tobraz',
				title: 'Т-Образная',
				img: 'img/menu/FORM/3_t_shaped.jpg',
			},
			{
				series: 'kolodec',
				title: 'Колодец',
				img: 'img/menu/FORM/4_well.jpg',
			},
			]	
		},		
		{
			section: 'profile',
			desc: 'Выберите серию',
			arrs: [
			{
				series: 'natur',
				title: 'natur',
				img: 'img/menu/PROFILE/natur.jpg',
				shir: 135,
				tolsh: 25,
				dlin: 3000,
				TerDosk: 0.405, //Террасные доски
				NesLag: 0.63, // Несущие лаги
				MontNab: 4, // Монтажные наборы
				TorZag: 0.135, // Торцевые заглушки
			},
			{
				series: 'mix',
				title: 'mix',
				img: 'img/menu/PROFILE/mix.jpg',
				shir: 135,
				tolsh: 25,
				dlin: 3000,
				TerDosk: 0.405,
				NesLag: 0.63,
				MontNab: 4,
				TorZag: 0.135, // Торцевые заглушки
			},
			{
				series: 'vintage',
				title: 'vintage',
				img: 'img/menu/PROFILE/vintage.jpg',
				shir: 140,
				tolsh: 25,
				dlin: 4000,
				TerDosk: 0.56,
				NesLag: 0.68,
				MontNab: 4.5,
			},
			{
				series: 'grand',
				title: 'grand',
				img: 'img/menu/PROFILE/grand.jpg',
				shir: 190,
				tolsh: 25,
				dlin: 4000,
				TerDosk: 0.76,
				NesLag: 0.68,
				MontNab: 6.5,
			},
			{
				series: 'bark',
				title: 'bark',
				img: 'img/menu/PROFILE/bark.jpg',
				shir: 140,
				tolsh: 25,
				dlin: 3000,
				TerDosk: 0.42,
				NesLag: 0.63,
				MontNab: 4.5,
			},
			{
				series: 'robust',
				title: 'robust',
				img: 'img/menu/PROFILE/robust.jpg',
				shir: 140,
				tolsh: 25,
				dlin: 3000,
				TerDosk: 0.42,
				NesLag: 0.63,
				MontNab: 4.5,
			}
			],	
			// options: options,
		},

		{
			section: 'direction',
			desc: 'Выберите направление укладки досок',

			arrs: [
			{
				series: 'vert',
				title: 'Встык',
				img: 'img/menu/DIRECTION/vert.jpg',
			},
			{
				series: 'goriz',
				title: 'Вразбежку',
				img: 'img/menu/DIRECTION/goriz.jpg',
			}
			],

		},
		{
			section: 'cover',
			desc: 'Выберите тип торцевого укрытия',
			arrs: [
			{
				series: 'zagl',
				title: 'Заглушки',
				img: 'img/menu/END_COVER/zagl.jpg',
			},
			{
				series: 'torec',
				title: 'Торцевая доска',
				img: 'img/menu/END_COVER/torec.jpg',
			},
			{
				series: 'perim',
				title: 'Торцевая доска по периметру',
				img: 'img/menu/END_COVER/perim.jpg',
			},			
			],

		},
		{
			section: 'size',
			desc: 'Введите размеры террасы + прилигание к стене',
		},
		],
		slide:0,
		direction: 'vert',

		visible: true,
		menuSection: '', // секция меню
		sectionProfile: 'natur', // серия доски
		shapeTag: 1, // меняет форму 
		directionTag: 1, // направление укладки доски
		coverTag: 1, // тип торцевого укрытия
		// profileTag: 1, 

		selectMenuIndex: 0, //выбрать какое меню открыто по умолчанию (поменять на '')
		checkbox: 'Нет', // прилигание к стене
		progressbar: 1, // поменять на 1

		Shape: 'pryamo',

// calc:'',
		valA: 10, // Длина (поменять на '')
		valB: 15, // Ширина (поменять на '')
		valC: 5,  // Ширина (поменять на '')
		valD: 4,  // Ширина (поменять на '')
		sideA: 0,
		sideB: 0,
		sideC: 0,
		sideD: 0,
		S: 0,
		P: 0,
		TerDosk: 0.405, // Террасные доски
		calcTerDosk: '',
		NesLag: 0.63, // Несущие лаги
		calcNesLag: '',
		MontNab: 4, // Монтажные наборы
		calcMontNab: '',
		YglProf:2, // Торцевые доски или угловые профили
		calcYglProf: '',	
		TorZag: 0.135, // Торцевые заглушки
		calcTorZag: '',
		StClips: '', // Стартовые клипсы
		notActive: '',
	},
	methods: { // определяйте методы в объекте
		bigfoto(k){ // смена картинки при клике на slide
			var slide = this.slide = --k;
		},
		progress(i) {
			let progressbar =  this.progressbar = ++i;
			this.selectMenuIndex = --i ; // автоматическое переключение на следубщие меню
		},
		press(menu, arr, i, index) { // обработка клика в меню
			let menuSection = this.menuSection = menu.section; // нахождение секции меню
			switch (menuSection) {
				case 'shape':
				var shapeTag = this.shapeTag = index + 1;
				var Shape = this.Shape = arr.series; // выбор картинки для формул
				break;
				case 'direction':
				var directionTag = this.directionTag = index + 1;
				var Direction = this.direction = arr.series;
				break;
				case 'cover':
				var coverTag = this.coverTag = index + 1;
				break;
				case 'profile':
				var sectionProfile = this.sectionProfile = arr.series;
				this.TerDosk = arr.TerDosk; // при клике подставляем (в TerDosk) цифровое значение с массива (arr.TerDosk)
				this.NesLag = arr.NesLag;
				this.MontNab = arr.MontNab;
				this.TorZag = arr.TorZag;
				break;
			}
			var selectMenuIndex = this.selectMenuIndex++ === i; // автоматическое переключение на следубщие меню

		},

		resStClips() { // функция передает значение в computed = > calc => switch (this.Shape)
			this.StClips = Math.round((this.sideA / 0.4 + 1) / 5);
		},
		disabled() {
		// 	// if (this.selectMenuIndex != 4 ) {return this.selectMenuIndex;}
			if (this.valA != 0 && this.valB != 0 && this.valC != 0 && this.valD != 0) {
				this.notActive = false
			} else {
				this.notActive = true
			}
		},
	},
	// filters: {
	// 	noTorec (menu, key, index, coverTag, img) {
	// 		var menuSection = this.menuSection = menu.section
	// 			if (key === 'natur' || key === 'mix' ) {
	// 				delete imgs[1];
	// 			}
	// 	}
	// }
	computed: { // вычесления и слежение 
		//кнопка замена текста
		textVis(){
			return this.visible ? 'Рассчитать колличество':'Показать калькулятор';
		},	
		// не активная кнлопка

		square(){
			return {
				'width': this.valA /2  + 'rem', 
				'height': this.valB /2 + 'rem'
			}
		},
		corner(){
			return {
				'width': this.valC /2 + 'rem',
				'height': this.valD /2 + 'rem'
			}			
		},
//calc
// Math.floor - Округляет вниз
// Math.ceil - Округляет вверх
// Math.round - Округляет до целого ближайшего
// toFixed(2) - 2 знака после запятой
		calc(){
			if (this.direction === 'vert') { // переключатель значений в зависимости от направления укладки
				this.sideA = this.valA;
				this.sideB = this.valB;
				this.sideC = this.valC;
				this.sideD = this.valD;	
			} else {
				this.sideA = this.valB; 
				this.sideB = this.valA;
				this.sideC = this.valD;
				this.sideD = this.valC;			
			}
			switch (this.Shape) {
				case 'pryamo':
					this.S = (this.sideA * this.sideB).toFixed(2);
					this.P = (2 * (this.sideA + this.sideB)).toFixed(2);
					this.resStClips(); // Стартовые клипсы
					this.calcTorZag = Math.round(this.sideB / this.TorZag);
					// this.sideC = 0; // скидывать sideC, sideD на ноль
					// this.sideD = 0;
					if (this.valA != 0 && this.valB != 0) { // disabled()
						this.notActive = false;
					} else {
						this.notActive = true;
					}
				break;
				case 'ygol':
					this.S = ((this.sideA * this.sideB) - (this.sideC * this.sideD)).toFixed(2);
					this.P = (2 * (this.sideA + this.sideB)).toFixed(2);
					this.resStClips();
					this.calcTorZag = Math.round(this.sideB / this.TorZag);
					this.disabled();
				break;
				case 'tobraz':
					this.S = ((this.sideA * this.sideB) + (this.sideC * this.sideD)).toFixed(2);
					this.P = (2 * (this.sideA + this.sideB)).toFixed(2);
					this.resStClips();
					this.calcTorZag = Math.round((this.sideB + this.sideC) / this.TorZag);
					this.disabled();
				break;
				case 'kolodec':
					this.S = ((this.sideA * this.sideB) - (this.sideC * this.sideD)).toFixed(2);
					this.P = (2 * (this.sideA + this.sideB)).toFixed(2);
					this.StClips = Math.round(((this.sideA + this.sideC) / 0.4 + 1 ) / 5);
					this.calcTorZag = Math.round((this.sideB + this.sideD) / this.TorZag);		
					this.disabled();
				break;
				// return this.Shape;
			};
		},
		resTorZag(){
			if (this.sectionProfile === 'natur' || this.sectionProfile === 'mix') {
				return this.calcTorZag; // Торцевые заглушки
			}
		},
		resTerDosk() {
			return this.calcTerDosk = Math.round(this.S / this.TerDosk); // подставляем вычисление в calcTerDosk
		},
		resNesLag(){
			return this.calcNesLag = Math.round(this.S / this.NesLag);
		},
		resMontNab(){
			return this.calcMontNab = Math.round(this.S / this.MontNab);
		},
		resYglProf(){
			return this.calcYglProf = Math.round(this.P / this.YglProf); // Торцевые доски или угловые профили
		},
	},
	// watch: { // слежка за свойствами 
	// 	calcTerDosk (val) {
	// 		this.calcTerDosk === val;
	// 	}
	// }
});
