# This program is gonna suggest anime to us

import random

			
			#Movies
Mylist ={	'movies' :{'action' : ['Matrix','John Wick','Vikram','Pushpa'],
		'adventure' : ['Jumanji','The Lion King','Fantastic Beasts','Uncharted'],
		'superhero' : ['Spiderman NO Way Home','Batman The Dark Knight']},
		
		# Books
		 'books' : {'selfgrowth' : ['5 AM club','Ikigai']},

		# Anime

		 'animes' : {'action' : ['Naruto','Bleach','My Hero Academia','Jujutsu Kaisen','Boruto'], 
		'adventure' : ['One Piece','Vinland Saga','Gurren Laggan','Gojo\'s Bizzar Adventure', ],
		'sports' : ['Haiyuu','Kuroko\'s Basketball'],
		'classroom' : ['Classroom of Elite']}	}

print("Enter \'!help\'' to get more information")

while True:

	users_choice = input("\nWhat you want to get suggested? ").lower()
	user_preference = input("What genre do you want? ").lower()


	if users_choice == 'exit' or user_preference == 'exit':
		print('Thanks for using us <3')
		break

	elif users_choice in Mylist and user_preference in Mylist.get(users_choice):

		suggestion = random.choice((Mylist.get(users_choice)).get(user_preference))
		print(f'\n\tOur recomendation is \'{suggestion}\'')


	else:
		print("Sorry, we do not have any recomendation :(")