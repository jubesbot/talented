# Generated by Django 3.2.5 on 2021-07-12 07:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('talented_app', '0004_auto_20210709_1750'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sport',
            old_name='agility',
            new_name='attribute_agility',
        ),
        migrations.RenameField(
            model_name='sport',
            old_name='analytic_aptitude',
            new_name='attribute_analytic_aptitude',
        ),
        migrations.RenameField(
            model_name='sport',
            old_name='durability',
            new_name='attribute_durability',
        ),
        migrations.RenameField(
            model_name='sport',
            old_name='endurance',
            new_name='attribute_endurance',
        ),
        migrations.RenameField(
            model_name='sport',
            old_name='flexibility',
            new_name='attribute_flexibility',
        ),
        migrations.RenameField(
            model_name='sport',
            old_name='handeye_coordination',
            new_name='attribute_handeye_coordination',
        ),
        migrations.RenameField(
            model_name='sport',
            old_name='nerve',
            new_name='attribute_nerve',
        ),
        migrations.RenameField(
            model_name='sport',
            old_name='power',
            new_name='attribute_power',
        ),
        migrations.RenameField(
            model_name='sport',
            old_name='speed',
            new_name='attribute_speed',
        ),
        migrations.RenameField(
            model_name='sport',
            old_name='strength',
            new_name='attribute_strength',
        ),
    ]