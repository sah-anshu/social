# Generated by Django 3.1 on 2020-08-18 20:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_name'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'ordering': ['-created_at']},
        ),
        migrations.RemoveField(
            model_name='user',
            name='updated_at',
        ),
    ]
