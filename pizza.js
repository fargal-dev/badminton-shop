const App = {
	data() {
		return {
			lolososCost: '379',
			chickenBlueCost: "349",
			asiaChickenCost: "279",
			italianCost: "299",
			shrimpsCost: "379",
			superMeatCost: "379",
			shrimpsTsezCost: "379",
			barbecueCost: "349",
			baronCost: "349",
			fourChesCost: "349",
			runchCost: "349",
			carbonaraCost: "349",
			basketCounter: 0,
			isActive: 0,
			inBascet: 0,
			inBascetSumm: 0,
			products: [
				// 'Заметка 1', 'Заметка 2'
				// { id: 1, title: 'hervam', cost: 349 },
				// { id: 2, title: 'hervam2', cost: 349 },
				// { id: 3, title: 'hervam3', cost: 349 },
			],
			snacks: [
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_oo1.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_oo2.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_oo3.jpg',
					cost: 1699,
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_oo4.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_oo5.jpg',
					cost: 1699, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo1.jpg',
					cost: 1699, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo2.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo3.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo4.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo5.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo6.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo7.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo8.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo9.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo10.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-a1.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-a2.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-a3.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-a4.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-a5.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-bl1.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка мужская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-r1.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				
				{
					title: 'Футболка Li-Ning',
					description: 'Футболка мужская .  Материал: 100% хлопок. Размерный ряд М - 4XL',
					img: 'img/fut_li-b1.jpg',
					cost: 1799, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка Li-Ning',
					description: 'Футболка мужская .  Материал: 100% хлопок. Размерный ряд М - 4XL',
					img: 'img/fut_li-b2.jpg',
					cost: 1799, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка Li-Ning',
					description: 'Футболка мужская .  Материал: 100% хлопок. Размерный ряд М - 4XL',
					img: 'img/fut_li-w1.jpg',
					cost: 1799, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка Li-Ning',
					description: 'Футболка мужская .  Материал: 100% хлопок. Размерный ряд М - 4XL',
					img: 'img/fut_li-w2.jpg',
					cost: 1799, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка Li-Ning',
					description: 'Футболка мужская .  Материал: 100% хлопок. Размерный ряд М - 4XL',
					img: 'img/fut_li-w3.jpg',
					cost: 1799, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка Li-Ning',
					description: 'Футболка мужская .  Материал: 100% хлопок. Размерный ряд М - 4XL',
					img: 'img/fut_li-w4.jpg',
					cost: 1799, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка Li-Ning',
					description: 'Футболка мужская .  Материал: 100% хлопок. Размерный ряд М - 4XL',
					img: 'img/fut_li-w5.jpg',
					cost: 1799, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка Li-Ning',
					description: 'Футболка мужская .  Материал: 100% хлопок. Размерный ряд М - 4XL',
					img: 'img/fut_li-w6.jpg',
					cost: 1799, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка Li-Ning',
					description: 'Футболка мужская .  Материал: 100% хлопок. Размерный ряд М - 4XL',
					img: 'img/fut_li-w7.jpg',
					cost: 1799, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка Li-Ning',
					description: 'Футболка мужская .  Материал: 100% хлопок. Размерный ряд S - XL',
					img: 'img/fut_li-w8.jpg',
					cost: 1199, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Шорты YONEX',
					description: 'Шорты мужские спортивные.  Материал: 100% хлопок. Размерный ряд S - XL',
					img: 'img/sh_yo-w1.jpg',
					cost: 1599, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Шорты YONEX',
					description: 'Шорты мужские спортивные.  Материал: 100% хлопок. Размерный ряд L - 4XL',
					img: 'img/sh_yo-w2.jpg',
					cost: 1599, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Шорты YONEX',
					description: 'Шорты мужские спортивные.  Материал: 100% хлопок. Размерный ряд L - 4XL',
					img: 'img/sh_yo-bl1.jpg',
					cost: 1599, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Шорты YONEX',
					description: 'Шорты мужские спортивные.  Материал: 100% хлопок. Размерный ряд M - 4XL',
					img: 'img/sh_yo-b1.jpg',
					cost: 1599, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				
				{
					title: 'Шорты Victor',
					description: 'Шорты мужские спортивные.  Материал: 100% хлопок. Размерный ряд M - 4XL',
					img: 'img/sh_vi-b1.jpg',
					cost: 1449, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Шорты Victor',
					description: 'Шорты мужские спортивные.  Материал: 100% хлопок. Размерный ряд M - 4XL',
					img: 'img/sh_vi-w1.jpg',
					cost: 1449, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Лонгслив YONEX',
					description: 'Лонгслив мужской.  Материал: 100% хлопок. Размерный ряд L - 4XL',
					img: 'img/long_yo-w1.jpg',
					cost: 1999, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Лонгслив YONEX',
					description: 'Лонгслив мужской.  Материал: 100% хлопок. Размерный ряд L - 4XL',
					img: 'img/long_yo-b1.jpg',
					cost: 1999, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
			],
			desserts: [
				{
					title: 'Футболка YONEX',
					description: 'Футболка женская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-gi1.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка женская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-gi2.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка женская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-gi3.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка женская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-gi4.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка женская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-gi5.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка женская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-w1.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка женская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-w2.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Футболка YONEX',
					description: 'Футболка женская спортивная. Материал: 100 % полиэстр. Размерный ряд М - 3XL',
					img: 'img/fut_yo-r1.jpg',
					cost: 1699, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Юбка YONEX',
					description: 'Юбка женская спортивная. Материал: 100 % полиэстр. Размерный ряд L - 3XL',
					img: 'img/sk_yo-w1.jpg',
					cost: 1599, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Юбка YONEX',
					description: 'Юбка женская спортивная. Материал: 100 % полиэстр. Размерный ряд L - 3XL',
					img: 'img/sk_yo-b1.jpg',
					cost: 1599, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Юбка YONEX',
					description: 'Юбка женская спортивная. Материал: 100 % полиэстр. Размерный ряд L - 3XL',
					img: 'img/sk_yo-bl1.jpg',
					cost: 1599, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				
				
			],
			beverages: [
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный вместительный',
					img: 'img/ruck_yo-big8.jpg',
					cost: 6949,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный вместительный',
					img: 'img/ruck_yo-big9.jpg',
					cost: 6949,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный вместительный',
					img: 'img/ruck_yo-big10.jpg',
					cost: 6949,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный вместительный',
					img: 'img/ruck_yo-big11.jpg',
					cost: 6949,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный вместительный',
					img: 'img/ruck_yo-big1.jpg',
					cost: 6949,
					type: 'New',
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный вместительный',
					img: 'img/ruck_yo-big2.jpg',
					cost: 6949,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный вместительный',
					img: 'img/ruck_yo-big3.jpg',
					cost: 6949,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный вместительный',
					img: 'img/ruck_yo-big4.jpg',
					cost: 6949,
					type: 'New',
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный вместительный',
					img: 'img/ruck_yo-big5.jpg',
					cost: 6949,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный вместительный',
					img: 'img/ruck_yo-big6.jpg',
					cost: 6949,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный вместительный',
					img: 'img/ruck_yo-big7.jpg',
				cost: 6949,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m1.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m2.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m3.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m4.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m5.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m6.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m7.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m8.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m9.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m10.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m11.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m12.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m13.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m14.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m15.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m16.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный средний',
					img: 'img/ruck_yo-m17.jpg',
					cost: 4999,
					counter: 0,
				},
				{
					title: 'Рюкзак  kumpoo',
					description: 'Рюкзак спортивный маленький',
					img: 'img/ruck_kum-1.jpg',
					cost: 3949,
					counter: 0,
				},
				{
					title: 'Рюкзак  kumpoo',
					description: 'Рюкзак спортивный маленький',
					img: 'img/ruck_kum-2.jpg',
					cost: 3949,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный маленький',
					img: 'img/ruck_yo-sm1.jpg',
					cost: 3449,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный маленький',
					img: 'img/ruck_yo-sm2.jpg',
					cost: 3449,
					counter: 0,
				},
				{
					title: 'Рюкзак YONEX',
					description: 'Рюкзак спортивный маленький',
					img: 'img/ruck_yo-sm3.jpg',
					cost: 3449,
					counter: 0,
				},
			],
			other: [
				{
					title: 'Кроссовки Yonex',
					description: 'Цвет: голубой ;  Размер: 36-45',
					img: 'img/kr_yo1.jpg',
					cost: 10499, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				
				{
					title: 'Кроссовки Yonex',
					description: 'Цвет: салатовый ;  Размер: 36-45',
					img: 'img/kr_yo2.jpg',
					cost: 10499, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Кроссовки Yonex',
					description: 'Цвет: серый ;  Размер: 36-45',
					img: 'img/kr_yo3.jpg',
					cost: 10499, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Кроссовки Yonex',
					description: 'Цвет: синий ;  Размер: 36-45',
					img: 'img/kr_yo4.jpg',
					cost: 10499, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Кроссовки Yonex',
					description: 'Цвет: зеленый ;  Размер: 36-45',
					img: 'img/kr_yo5.jpg',
					cost: 10499, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Кроссовки Yonex',
					description: 'Цвет: черный ;  Размер: 36-45',
					img: 'img/kr_yo6.jpg',
					cost: 10499, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Обмотки Li-ning gp 2000',
					description: 'Цена: 140₽ ; От 15шт 120₽ ; От 30шт 110₽ ; От 60шт 99₽',
					img: 'img/band_li-1.jpg',
					cost: 140, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Обмотки Taan Tw880',
					description: 'Цена: 99₽ ; От 15шт 90₽ ; От 30шт 80₽ ; От 60шт 70₽',
					img: 'img/band_taan-1.jpg',
					cost: 99, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Обмотки Taan Tw750, Tw80',
					description: 'Цена: 99₽ ; От 15шт 90₽ ; От 30шт 80₽ ; От 60шт 70₽',
					img: 'img/band_taan-2.jpg',
					cost: 99, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Носки Yonex',
					description: 'Цвет: белый ;  Размер: 25-28 см',
					img: 'img/sock_w1.jpg',
					cost: 420, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Носки Yonex',
					description: 'Цвет: чёрный ; Размер: 25-28 см',
					img: 'img/sock_b1.jpg',
					cost: 420, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Носки Li-ning',
					description: 'Размер: 22-26 см',
					img: 'img/sock_w2.jpg',
					cost: 170, 
					counter: 0,
					id: 1,
					// disabled: false,
				},
				
				
			],
		}
	},
	methods: {
		onCounter(it) {
			let resultTwo = this.products.findIndex(item => item.title === it.pizzaName);
			if (resultTwo == -1) {
				const newPizza = { title: 1 };
				this.inBascetSumm += Number(it.cost);
				this.inBascet++;
				newPizza.counter = 1;
				newPizza.title = it.pizzaName;
				newPizza.cost = Number(it.cost);
				this.products.push(newPizza)
			}
			else {
				this.inBascetSumm += Number(it.cost);
				this.inBascet++;
				let resultOne = this.products.find(item => item.title === it.pizzaName);
				resultOne.counter++;
			}
		},
		onCounterMinus(it) {
			this.inBascet--;
			this.inBascetSumm -= Number(it.cost);
			let resultOne = this.products.find(item => item.title === it.pizzaName);
			resultOne.counter--;
			if (resultOne.counter == 0) {
				this.removeProduct(idx)
			}
		},
		removeProduct(idx) {
			this.products.splice(idx, 1)
		},
		counterPlus(idx) {
			this.products[idx].counter++;
			this.inBascet++;
			this.inBascetSumm += this.products[idx].cost;
		},
		counterMinus(idx) {
			this.products[idx].counter--;
			this.inBascet--;
			this.inBascetSumm -= this.products[idx].cost;
		},
		snackCounterMinus(idx) {
			this.snacks[idx].counter--; this.inBascet--; this.inBascetSumm -= this.snacks[idx].cost
			// if (this.snacks[idx].counter > 1) { this.snacks[idx].counter--; this.inBascet--; this.inBascetSumm -= this.snacks[idx].cost }
			// else { this.snacks[idx].disabled = true; this.snacks[idx].counter = 0; this.inBascet--; this.inBascetSumm -= this.snacks[idx].cost }
		},
		dessertsCounterMinus(idx) {
			this.desserts[idx].counter--; this.inBascet--; this.inBascetSumm -= this.desserts[idx].cost
		},
		beveragesCounterMinus(idx) {
			this.beverages[idx].counter--; this.inBascet--; this.inBascetSumm -= this.beverages[idx].cost
		},
		otherCounterMinus(idx) {
			this.other[idx].counter--; this.inBascet--; this.inBascetSumm -= this.other[idx].cost
		},
		scrollTo(value) {
			window.scrollTo({
				top: value,
				left: 0,
				behavior: "smooth"
			});
			menu.classList.remove('active');
			burger.classList.remove('active');
		},
		scrollTo2() {
			document.getElementById("other").scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
			menu.classList.remove('active');
			burger.classList.remove('active');
		},
		scrollTo3() {
			document.getElementById("desserts").scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
			menu.classList.remove('active');
			burger.classList.remove('active');
		},
		scrollTo4() {
			document.getElementById("beverages").scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
			menu.classList.remove('active');
			burger.classList.remove('active');
		},
	},

}
// Vue.createApp(App).mount('#app')
const app = Vue.createApp(App)
app.component('type-block', {
	data() {
		return {
			count: 1
		}
	},
	props: ['actualCost', 'counter'],
	methods: {
		countPlus() {
			this.count++;
			this.$emit('counterPlus', {
			});
			// this.$emit('counter', {
			// 	cost: this.actualCost,
			// 	count: this.count,
			// 	pizzaName: this.pizzaName
			// });
		},
		countMinus() {
			this.count = this.counter;
			this.count--;
			this.$emit('counterMinus', {});
		}
	},
	watch: {
		count(v) {
			if (v == 0) {
				this.$emit('counterNull', {
					// count: this.count
				});
			}
		}
	},
	// props: ['actualCost', 'needCost',],
	template: `
	<button v-if="count < 1" @click="countPlus"
		class="grid-template-pizza__to-bascet-button">В
		корзину</button>
	<div v-else class="grid-template-pizza__in-bascet">
		<div class="grid-template-pizza__gal">
			<img src="img/gal.svg" alt="">
		</div>
		<button @click="countMinus" type="submit" class="counter--">-</button>
		<slot></slot>
		<button @click="countPlus" type="submit" class="counterplus">+</button>
	</div>
`
})
app.component('type-block2', {
	data() {
		return {
			count: 0
		}
	},
	methods: {
		addToBasket() {
			this.count++;
			if (this.count == 1) {
				this.$emit('counter', {
					cost: this.actualCost,
					count: this.count,
					pizzaName: this.pizzaName
				})
			}
			else {
				this.$emit('counter', {
					cost: this.actualCost,
					count: this.count,
					pizzaName: this.pizzaName
				})
			};
		},
		removeFromBasket() {
			this.count--;
			this.$emit('counterMinus', {
				cost: this.actualCost,
				count: this.count,
				pizzaName: this.pizzaName
			})
		}
	},
	props: ['actualCost', 'needCost', 'pizzaName'],
	template: `
	<template v-if="actualCost == needCost">
	<button v-if="count < 100" @click="addToBasket"
		class="grid-template-pizza__to-bascet-button">В
		корзину</button>
	<div v-else class="grid-template-pizza__in-bascet">
		<div class="grid-template-pizza__gal">
			<img src="img/gal.svg" alt="">
		</div>
		<button @click="removeFromBasket" type="submit" class="counter--">-</button>
		<div class="counter">{{count}}</div>
		<button @click="addToBasket" type="submit" class="counterplus">+</button>
	</div>
</template>
`
})
app.component('trans', {
	template: `
	<transition name="fade" mode="out-in">
		<slot></slot>
	</transition>
	`
})
app.component('trans-gr', {
	template: `
	<transition-group name="list" tag="">
		<slot></slot>
	</transition-group>
	`
})
app.component('number', {
	data() {
		return {
			count: 0,
			her: 0,
			tweenedNumber: 0
		}
	},
	props: ['number',],
	template: `
	<p v-if="count == 0">{{ her + ' ₽'}}</p>
	<p v-if="count != 0">{{ animatedNumber + ' ₽'}}</p>
	`,
	computed: {
		animatedNumber() {

			return this.tweenedNumber.toFixed(0)
		}
	},
	watch: {
		number(newValue) {
			this.count++;
			gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue })
		}
	},
	mounted: function () {
		this.her = this.number
	},

})
app.component('number2', {
	data() {
		return {
			count: 0,
			her: 0,
			tweenedNumber: 0
		}
	},
	props: ['number',],
	template: `
	<template v-if="count == 0">{{ her + ' рублей'}}</template>
	<template v-if="count != 0">{{ animatedNumber + ' рублей'}}</template>
	`,
	computed: {
		animatedNumber() {

			return this.tweenedNumber.toFixed(0)
		}
	},
	watch: {
		number(newValue) {
			this.count++;
			gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue })
		}
	},
	mounted: function () {
		this.her = this.number
	},

})
// @click="infoCounter++"
app.component('info', {
	data() {
		return {
			infoCounter: 1,
		}
	},
	template: `
	<a href="#popup-write">
	
	<button   type="submit" class="grid-template-pizza__info"
		:class="{checked: infoCounter % 2 == 0 }">Оформить заказ
		<trans>
			<template v-if="infoCounter % 2 == 0">
				<slot></slot>
			</template>
		</trans>
	</button>
	</a>
	
	`
})
// app.mount('#type-blocks')
app.mount('#app')
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.burger-menu');
const wrapper = document.querySelector('.wrapper');
burger.addEventListener("click", function (e) {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	wrapper.classList.toggle('hidden');
});

menu.addEventListener('touchstart', handleTouchStart, false);
menu.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
	xDown = evt.touches[0].clientX;
	yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
	if (!xDown || !yDown) {
		return;
	}
	var xUp = evt.touches[0].clientX;
	var yUp = evt.touches[0].clientY;
	var xDiff = xDown - xUp;
	var yDiff = yDown - yUp;

	if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
		if (xDiff > 0) {
			/* left swipe */
			menu.classList.remove('active');
			burger.classList.remove('active');
		} else {
			/* right swipe */
			menu.classList.remove('active');
			burger.classList.remove('active');
		}
	} else {
		if (yDiff > 0) {
			/* up swipe */
		} else {
			/* down swipe */
		}
	}
	/* reset values */
	xDown = null;
	yDown = null;
};
