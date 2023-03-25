from cryptography.fernet import Fernet

# retrieve the key used to encrypt the message
key = b'your key here'

# create a Fernet object using the key
cipher = Fernet(key)

# the encrypted message
encrypted_message = b'gAAAAABkHo_moUhZH8RTVIQ9B8iM848PEjvD0f896fjPdGolGVrJlP12M5uT-sMZymA-ZuBFQeWYHmrg9hInext2_CyfJYyH-1F_mQ7UOPhTeUAs19PftwaFsGyEWwYGwlkCbywVwlKF'

# decrypt the message
decrypted_message = cipher.decrypt(encrypted_message)

print(decrypted_message)
