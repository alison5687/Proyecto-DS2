from django.db import models
from django.utils import timezone


class Profile(models.Model):
    """Modelo para el perfil principal"""
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200, blank=True, null=True)
    email = models.EmailField()
    linkedin = models.URLField(blank=True, null=True)
    github = models.CharField(max_length=100, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    about = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Perfil"
        verbose_name_plural = "Perfiles"

    def __str__(self):
        return self.name


class Skill(models.Model):
    """Modelo para habilidades técnicas"""
    CATEGORY_CHOICES = [
        ('programming', 'Programación'),
        ('frontend', 'Frontend'),
        ('backend', 'Backend'),
        ('database', 'Base de Datos'),
        ('tools', 'Herramientas'),
        ('other', 'Otros'),
    ]

    name = models.CharField(max_length=100)
    level = models.IntegerField(default=0, help_text="Nivel de 0 a 100")
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='programming')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Habilidad"
        verbose_name_plural = "Habilidades"
        ordering = ['-level', 'name']

    def __str__(self):
        return f"{self.name} ({self.level}%)"


class Technology(models.Model):
    """Modelo para tecnologías y frameworks"""
    CATEGORY_CHOICES = [
        ('frontend', 'Frontend'),
        ('backend', 'Backend'),
        ('database', 'Base de Datos'),
        ('tools', 'Herramientas'),
        ('other', 'Otros'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='frontend')
    icon = models.CharField(max_length=10, blank=True, null=True, help_text="Emoji o nombre de icono")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Tecnología"
        verbose_name_plural = "Tecnologías"
        ordering = ['category', 'name']

    def __str__(self):
        return self.name


class Experience(models.Model):
    """Modelo para experiencia laboral"""
    company = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    current = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Experiencia"
        verbose_name_plural = "Experiencias"
        ordering = ['-start_date']

    def __str__(self):
        return f"{self.position} en {self.company}"


class Education(models.Model):
    """Modelo para educación"""
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    field = models.CharField(max_length=200, blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Educación"
        verbose_name_plural = "Educaciones"
        ordering = ['-start_date']

    def __str__(self):
        return f"{self.degree} - {self.institution}"


class Project(models.Model):
    """Modelo para proyectos"""
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    technologies = models.JSONField(default=list, blank=True, help_text="Lista de tecnologías")
    github_url = models.URLField(blank=True, null=True)
    demo_url = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Proyecto"
        verbose_name_plural = "Proyectos"
        ordering = ['-created_at']

    def __str__(self):
        return self.name


class ContactMessage(models.Model):
    """Modelo para mensajes de contacto"""
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=200, blank=True, null=True)
    message = models.TextField()
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Mensaje de Contacto"
        verbose_name_plural = "Mensajes de Contacto"
        ordering = ['-created_at']

    def __str__(self):
        return f"Mensaje de {self.name} - {self.subject or 'Sin asunto'}"

