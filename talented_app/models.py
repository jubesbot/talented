from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Talent(models.Model):
    ranking_choices = [(i,i) for i in range(11)]

    scout = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             related_name="talent",
                             null=True)
    
    talent_name = models.CharField(max_length=255,null=True)

    attribute_endurance = models.IntegerField(choices=ranking_choices, default = 1)
    attribute_strength = models.IntegerField(choices=ranking_choices, default = 1)
    attribute_power = models.IntegerField(choices=ranking_choices, default = 1)
    attribute_speed = models.IntegerField(choices=ranking_choices, default = 1)
    attribute_agility = models.IntegerField(choices=ranking_choices, default = 1)
    attribute_flexibility = models.IntegerField(choices=ranking_choices, default = 1)
    attribute_nerve = models.IntegerField(choices=ranking_choices, default = 1)
    attribute_durability = models.IntegerField(choices=ranking_choices, default = 1)
    attribute_handeye_coordination = models.IntegerField(choices=ranking_choices, default = 1)
    attribute_analytic_aptitude = models.IntegerField(choices=ranking_choices, default = 1)

class Sport(models.Model):
    sport = models.CharField(max_length=255)
    attribute_endurance = models.DecimalField(max_digits=4, decimal_places=2)
    attribute_strength = models.DecimalField(max_digits=4, decimal_places=2)
    attribute_power = models.DecimalField(max_digits=4, decimal_places=2)
    attribute_speed = models.DecimalField(max_digits=4, decimal_places=2)
    attribute_agility = models.DecimalField(max_digits=4, decimal_places=2)
    attribute_flexibility = models.DecimalField(max_digits=4, decimal_places=2)
    attribute_nerve = models.DecimalField(max_digits=4, decimal_places=2)
    attribute_durability = models.DecimalField(max_digits=4, decimal_places=2)
    attribute_handeye_coordination = models.DecimalField(max_digits=4, decimal_places=2)
    attribute_analytic_aptitude = models.DecimalField(max_digits=4, decimal_places=2)
    total = models.DecimalField(max_digits=4, decimal_places=2, null=True)
    
