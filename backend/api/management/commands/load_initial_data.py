from django.core.management.base import BaseCommand
from api.models import Profile, Skill, Technology


class Command(BaseCommand):
    help = 'Carga datos iniciales en la base de datos'

    def handle(self, *args, **options):
        # Crear perfil inicial
        profile, created = Profile.objects.get_or_create(
            id=1,
            defaults={
                'name': 'Tu Nombre',
                'title': 'Desarrollador Full Stack',
                'email': 'alisonji5697@gmail.com',
                'linkedin': 'https://linkedin.com/in/tu-perfil',
                'github': 'ali5697',
                'bio': 'Transformando ideas en código, código en soluciones',
                'about': 'Soy un desarrollador apasionado por crear soluciones innovadoras. Mi enfoque combina habilidades técnicas sólidas con una mentalidad colaborativa y pedagógica. Me encanta compartir conocimiento y explicar conceptos complejos de manera sencilla.'
            }
        )
        if created:
            self.stdout.write(self.style.SUCCESS('✓ Perfil creado'))
        else:
            self.stdout.write(self.style.WARNING('⚠ Perfil ya existe'))

        # Crear habilidades iniciales
        skills_data = [
            {'name': 'JavaScript', 'level': 90, 'category': 'programming'},
            {'name': 'Python', 'level': 85, 'category': 'programming'},
            {'name': 'PHP', 'level': 80, 'category': 'programming'},
            {'name': 'Java', 'level': 60, 'category': 'programming'},
            {'name': 'HTML', 'level': 95, 'category': 'frontend'},
            {'name': 'CSS', 'level': 90, 'category': 'frontend'},
        ]

        for skill_data in skills_data:
            skill, created = Skill.objects.get_or_create(
                name=skill_data['name'],
                defaults=skill_data
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'✓ Habilidad {skill_data["name"]} creada'))

        # Crear tecnologías iniciales
        technologies_data = [
            {'name': 'React', 'category': 'frontend', 'icon': '⚛️'},
            {'name': 'Django', 'category': 'backend', 'icon': '🐍'},
            {'name': 'Laravel', 'category': 'backend', 'icon': '🔥'},
            {'name': 'SQL', 'category': 'database', 'icon': '🗄️'},
            {'name': 'R', 'category': 'database', 'icon': '📊'},
            {'name': 'HTML', 'category': 'frontend', 'icon': '📄'},
            {'name': 'CSS', 'category': 'frontend', 'icon': '🎨'},
        ]

        for tech_data in technologies_data:
            tech, created = Technology.objects.get_or_create(
                name=tech_data['name'],
                defaults=tech_data
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'✓ Tecnología {tech_data["name"]} creada'))

        self.stdout.write(self.style.SUCCESS('\n✅ Datos iniciales cargados correctamente'))

