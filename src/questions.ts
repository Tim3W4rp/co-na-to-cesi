export type Questions = Array<{
	question: string,
	answers: Array<{
		answer: string,
		score: number
	}>
}>;

export const questions1: Questions = [
	{
		question: "1. Co uniká?",
		answers: [
			{
				answer: "plyn",
				score: 42,
			},
			{
				answer: "zloděj",
				score: 21
			},
			{
				answer: "smysl",
				score: 12
			},
			{
				answer: "mládí",
				score: 7
			},
			{
				answer: "čas",
				score: 4
			},
		]
	},
	{
		question: "2. Co může být obtížné zadržet?",
		answers: [
			{
				answer: "dech",
				score: 35,
			},
			{
				answer: "moč",
				score: 26
			},
			{
				answer: "větry",
				score: 13
			},
			{
				answer: "stolici",
				score: 11
			},
			{
				answer: "pachatele",
				score: 7
			},
		]
	},
	{
		question: "3. Co je tak klouzavé, že je těžké to udržet?",
		answers: [
			{
				answer: "mýdlo",
				score: 33,
			},
			{
				answer: "led",
				score: 25
			},
			{
				answer: "ryba",
				score: 14
			},
			{
				answer: "vajíčko",
				score: 10
			},
			{
				answer: "myšlenka",
				score: 7
			},
		]
	},
	{
		question: "4. Co může rodič vytáhnout z dítěte?",
		answers: [
			{
				answer: "hlen, nudli",
				score: 34,
			},
			{
				answer: "pravdu",
				score: 27
			},
			{
				answer: "hračku",
				score: 16
			},
			{
				answer: "tajemství",
				score: 10
			},
			{
				answer: "klíště",
				score: 6
			},	
		]
	},
	{
		question: "5. Co byste nechtěli, aby policie našla ve vašem autě?",
		answers: [
			{
				answer: "drogy",
				score: 33,
			},
			{
				answer: "mrtvolu",
				score: 18
			},
			{
				answer: "alkohol",
				score: 16
			},
			{
				answer: "zbraň",
				score: 12
			},
			{
				answer: "prošlou lékárničku",
				score: 7
			}
		]
	},
]

export const questions2: Questions = [
	{
		question: "1. Co dělá muž, když musí jít se ženou nakupovat?",
		answers: [
			{
				answer: "nudí se",
				score: 35,
			},
			{
				answer: "nosí tašky",
				score: 18
			},
			{
				answer: "nadává",
				score: 14
			},
			{
				answer: "platí",
				score: 12
			},
			{
				answer: "trpí",
				score: 6
			},
		]
	},
	{
		question: "2. Co se nevyplatí odkládat?",
		answers: [
			{
				answer: "placení",
				score: 31,
			},
			{
				answer: "práci",
				score: 19
			},
			{
				answer: "učení",
				score: 17
			},
			{
				answer: "návštěvu lékaře",
				score: 12
			},
			{
				answer: "povinnosti",
				score: 8
			},
		]
	},
	{
		question: "3. Co bývá tupé?",
		answers: [
			{
				answer: "nůž",
				score: 34,
			},
			{
				answer: "člověk",
				score: 20
			},
			{
				answer: "nůžky",
				score: 12
			},
			{
				answer: "paruka",
				score: 8
			},
			{
				answer: "tužka",
				score: 6
			},
		]
	},
	{
		question: "4. Co vás jako první napadne v souvislosti s číslem 5?",
		answers: [
			{
				answer: "školní známka",
				score: 45,
			},
			{
				answer: "bylo nás pět",
				score: 17
			},
			{
				answer: "číslo 5 žije",
				score: 12
			},
			{
				answer: "prsty na ruce",
				score: 9
			},
			{
				answer: "pracovní dny v týdnu",
				score: 7
			},
		]
	},
	{
		question: "5. Co můžete pohnojit?",
		answers: [
			{
				answer: "záhon",
				score: 29,
			},
			{
				answer: "pole",
				score: 18
			},
			{
				answer: "zahradu",
				score: 16
			},
			{
				answer: "květiny",
				score: 10
			},
			{
				answer: "zkoušku",
				score: 8
			},
		]
	},
]

export const questions3: Questions = [
	{
		question: "Co zanedbávají studenti, když se učí na zkoušku?",
		answers: [
			{
				answer: "spánek",
				score: 33,
			},
			{
				answer: "přátele, kamarády",
				score: 21
			},
			{
				answer: "sex",
				score: 16
			},
			{
				answer: "rodiče",
				score: 11
			},
			{
				answer: "hygienu",
				score: 9
			},
		]
	},
	{
		question: "Co se může zaseknout?",
		answers: [
			{
				answer: "zip",
				score: 31,
			},
			{
				answer: "klíč v zámku",
				score: 17
			},
			{
				answer: "počítač",
				score: 14
			},
			{
				answer: "výtah",
				score: 12
			},
			{
				answer: "motor",
				score: 10
			},
		]
	},
	{
		question: "Co je České?",
		answers: [
			{
				answer: "pivo",
				score: 35,
			},
			{
				answer: "koruna",
				score: 24
			},
			{
				answer: "buchty",
				score: 16
			},
			{
				answer: "hymna",
				score: 11
			},
			{
				answer: "Budějovice",
				score: 5
			},
		]
	},
	{
		question: "Co jste ve svém životě začali a nedokončili?",
		answers: [
			{
				answer: "školu",
				score: 41,
			},
			{
				answer: "hubnutí",
				score: 27
			},
			{
				answer: "hru na hudební nástroj",
				score: 13
			},
			{
				answer: "stavbu domu",
				score: 8
			},
			{
				answer: "kurzy",
				score: 6
			},
		]
	},
	{
		question: "Co může padnout?",
		answers: [
			{
				answer: "vláda",
				score: 29,
			},
			{
				answer: "mlha",
				score: 25
			},
			{
				answer: "rosa",
				score: 16
			},
			{
				answer: "ceny",
				score: 8
			},
			{
				answer: "měna",
				score: 7
			},
		]
	},
	{
		question: "Co se obchází?",
		answers: [
			{
				answer: "zákon",
				score: 35,
			},
			{
				answer: "překážka",
				score: 17
			},
			{
				answer: "budova",
				score: 14
			},
			{
				answer: "exkrement",
				score: 11
			},
			{
				answer: "pravidla",
				score: 7
			},
		]
	},
	{
		question: "Co můžete pověsit na hřebík?",
		answers: [
			{
				answer: "práci",
				score: 36,
			},
			{
				answer: "obraz",
				score: 28
			},
			{
				answer: "oblečení",
				score: 14
			},
			{
				answer: "klíče",
				score: 8
			},
			{
				answer: "starosti",
				score: 6
			},
		]
	},
	{
		question: "Jaké mohou být volby?",
		answers: [
			{
				answer: "zmanipulované",
				score: 31,
			},
			{
				answer: "prezidenské",
				score: 22
			},
			{
				answer: "parlamentní",
				score: 14
			},
			{
				answer: "senátní",
				score: 10
			},
			{
				answer: "podplacené",
				score: 9
			},
		]
	}
]