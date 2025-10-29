from django.db import models

PLAN_TYPES = [
    ('ROYAL', 'Royal Lobolo Insurance'),
    ('PREMIUM', 'Premium Lobolo Insurance'),
    ('STANDARD', 'Standard Lobolo Insurance'),
    ('BASIC', 'Basic Lobolo Insurnace')
]


class InsurancePlan(models.Model):
    """
    Defines an insurance plan offered by the platform
    """
    name = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    plan_type = models.CharField(
        max_length=32, choices=PLAN_TYPES
    )
    base_premium = models.DecimalField(
        max_digits=10, decimal_places=2
    )
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
