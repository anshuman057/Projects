# This program is gonna suggest anime to us

import random

			
			#Movies
Mylist ={	'Movies' :{'action' : ['Matrix','John Wick','Vikram','Pushpa'],
		'Adventure' : ['Jumanji','The Lion King','Fantastic Beasts','Uncharted'],
		'Superhero' : ['Spiderman NO Way Home','Batman The Dark Knight']},
		
		# Books
		 'Books' : {'selfgrowth' : ['5 AM club','Ikigai']},

		# Anime

		 'Animes' : {'action' : ['Naruto','Bleach','My Hero Academia','Jujutsu Kaisen','Boruto'], 
		'Adventure' : ['One Piece','Vinland Saga','Gurren Laggan','Gojo\'s Bizzar Adventure', ],
		'Sports' : ['Haiyuu','Kuroko\'s Basketball'],
		'Classroom' : ['Classroom of Elite']}	}

print("Enter \'!help\'' to get more information")

while True:

	users_choice = input("\nWhat you want to get suggested? ").capitalize()

	if users_choice == '!help':
		print(f'We can suggest you about {(", ".join(str(key) for key in Mylist.keys()))}')
		continue

	user_preference = input("What genre do you want? ").capitalize()

	if user_preference == '!help':
		preference = Mylist.get(users_choice)
		print(f'We have collection of {(", ".join(str(key) for key in preference.keys()))}')
		continue

	#Next syntax

	if users_choice == 'Exit' or user_preference == 'Exit':
		print('Thanks for using us <3')
		break


	elif users_choice in Mylist and user_preference in Mylist.get(users_choice):

		suggestion = random.choice((Mylist.get(users_choice)).get(user_preference))
		print(f'\n\tOur recomendation is \'{suggestion}\'')


	else:
		print("Sorry, we do not have any recomendation :(")
