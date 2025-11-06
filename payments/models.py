from django.db import models
from django.contrib.auth.models import User
from quotes.models import Quote


class Payment(models.Model):
    """
    Records a user's premium payments.
    """
    user = models.ForeignKey(
        User, on_delete=models.CASCADE
    )
    quote = models.ForeignKey(
        Quote, on_delete=models.CASCADE
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    paid_at = models.DateTimeField(auto_now_add=True)
    reference_id = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f"Payment {self.reference_id} - {self.amount}"
