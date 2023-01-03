import random

# This function generates a random word from a list of words
def get_random_word():
  words = ['apple', 'banana', 'orange', 'strawberry', 'kiwi', 'pineapple']
  return random.choice(words)

# This function takes a guess and a secret word, and returns the number of letters that are correctly guessed
def check_guess(guess, secret_word):
  correct_letters = 0
  for i in range(len(secret_word)):
    if guess[i] == secret_word[i]:
      correct_letters += 1
  return correct_letters

# Choose a secret word
secret_word = get_random_word()

# Initialize the number of incorrect guesses
incorrect_guesses = 0

# Keep asking the user for guesses until they get the word or run out of chances
while incorrect_guesses < 6:
  guess = input("Enter a guess for the secret word:")
  if guess == secret_word:
    print("You guessed the secret word!")
    break
  else:
    correct_letters = check_guess(guess, secret_word)
    if correct_letters == 0:
      print("No correct letters")
    else:
      print("{} correct letters".format(correct_letters))
    incorrect_guesses += 1

# Display the result of the game
if incorrect_guesses == 6:
  print("You lost! The secret word was '{}'.".format(secret_word))
else:
  print("You won!")