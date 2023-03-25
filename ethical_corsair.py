from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives.ciphers import modes
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.backends import default_backend
import os

#key = #

# use PBKDF2HMAC to hash the key to a valid size for AES
salt = os.urandom(16)
kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=salt, iterations=100000, backend=default_backend())
hashed_key = kdf.derive(key)

# create a random 16-byte initialization vector
iv = os.urandom(16)

# create a Cipher object using the hashed key and initialization vector
cipher = Cipher(algorithms.AES(hashed_key), modes.CBC(iv), backend=default_backend())

# create an encryptor object
encryptor = cipher.encryptor()

# encrypt the message
#message = b'Hidden Message. the Key is b'Ethical Corsair'. 🤣younes.ca🤣'
padded_message = message + b'\0' * (16 - len(message) % 16)
encrypted_message = encryptor.update(padded_message) + encryptor.finalize()
print(encrypted_message)

# create a decryptor object
decryptor = cipher.decryptor()

# do something
#decrypted_message = decryptor.update(encrypted_message) + decryptor.finalize()
#unpadded_message = decrypted_message.rstrip(b'\0')

#print(unpadded_message) i wonder what this is
