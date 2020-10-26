from django.contrib.auth.tokens import PasswordResetTokenGenerator


class TokenGen(PasswordResetTokenGenerator):
    pass


generate_token = TokenGen()
