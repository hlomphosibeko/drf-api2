from django.db import models
from django.contrib.auth.models import User
from insurance.models import InsurancePlan


class Quote(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='quotes'
    )
    plan = models.ForeignKey(
        InsurancePlan, on_delete=models.CASCADE
    )
    age = models.PositiveIntegerField()
    num_kids = models.PositiveIntegerField(default=0)
    num_married = models.PositiveIntegerField(default=0)
    tertiary_education = models.BooleanField(default=False)
    cooker = models.BooleanField(default=False)
    neat = models.BooleanField(default=False)
    steady_income = models.BooleanField(default=False)
    personality = models.PositiveIntegerField()
    spirituality = models.PositiveBigIntegerField()
    innocence = models.PositiveIntegerField()
    premium_plan = models.DecimalField(
        max_digits=10, decimal_places=2, default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.premium_plan = (
            (500 / (1 + self.age))
            + (500 / (1 + self.num_kids))
            + (500 / (1 + self.num_married))
            + (500 * (1 if self.tertiary_education else 0))
            + (500 * (1 if self.cooker else 0))
            + (500 * (1 if self.neat else 0))
            + (500 * (1 if self.steady_income else 0))
            + (500 * self.personality / 100)
            + (500 * self.spirituality / 100)
        ) / (12 * max(1, self.innocence / 100))

        super().save(*args, **kwargs)
