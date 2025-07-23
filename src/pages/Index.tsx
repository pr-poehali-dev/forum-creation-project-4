import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все', icon: 'Grid3X3' },
    { id: 'mouse', name: 'Мышки', icon: 'Mouse' },
    { id: 'headphones', name: 'Наушники', icon: 'Headphones' },
    { id: 'keyboard', name: 'Клавиатуры', icon: 'Keyboard' }
  ];

  const products = [
    {
      id: 1,
      title: 'Logitech G Pro X Superlight',
      category: 'mouse',
      rating: 4.8,
      reviews: 156,
      likes: 342,
      image: '/placeholder.svg',
      author: 'GamerPro',
      description: 'Невероятно легкая игровая мышь с топовым сенсором',
      tags: ['Беспроводная', 'Игровая', 'RGB'],
      videoId: 'dQw4w9WgXcQ',
      fullDescription: 'Logitech G Pro X Superlight — это революция в мире игровых мышей. Разработанная совместно с профессиональными киберспортсменами, эта мышь воплощает в себе идеальный баланс между весом и функциональностью. Вес всего 63 грамма достигается благодаря использованию инновационных материалов и переосмыслению внутренней архитектуры устройства.',
      specifications: {
        'Сенсор': 'HERO 25K',
        'DPI': 'До 25,600',
        'Кнопки': '5 программируемых',
        'Вес': '63 грамма',
        'Подключение': 'LIGHTSPEED беспроводная',
        'Время работы': 'До 70 часов',
        'Размеры': '125 × 63.5 × 40 мм'
      },
      comments: 47
    },
    {
      id: 2,
      title: 'SteelSeries Arctis Pro',
      category: 'headphones',
      rating: 4.6,
      reviews: 89,
      likes: 198,
      image: '/placeholder.svg',
      author: 'AudioExpert',
      description: 'Профессиональные игровые наушники с Hi-Res звуком',
      tags: ['Hi-Res', 'Микрофон', 'USB-C'],
      videoId: 'dQw4w9WgXcQ',
      fullDescription: 'SteelSeries Arctis Pro устанавливает новый стандарт в области игрового аудио. Оснащенные высококачественными драйверами Hi-Res Audio, эти наушники обеспечивают невероятно детализированное звучание. Микрофон ClearCast с технологией шумоподавления гарантирует кристально чистую передачу голоса.',
      specifications: {
        'Драйверы': '40мм неодимовые',
        'Частотный диапазон': '10-40,000 Гц',
        'Импеданс': '32 Ом',
        'Микрофон': 'ClearCast с шумоподавлением',
        'Подключение': 'USB-C / 3.5мм',
        'Вес': '346 грамм',
        'Кабель': '1.2м + 2м удлинитель'
      },
      comments: 23
    },
    {
      id: 3,
      title: 'Keychron K3',
      category: 'keyboard',
      rating: 4.7,
      reviews: 234,
      likes: 456,
      image: '/placeholder.svg',
      author: 'KeyboardMaster',
      description: 'Механическая беспроводная клавиатура с низким профилем',
      tags: ['Механическая', 'Bluetooth', 'Low Profile'],
      videoId: 'dQw4w9WgXcQ',
      fullDescription: 'Keychron K3 представляет собой идеальное сочетание компактности и функциональности механической клавиатуры. Тонкий профиль не идет в ущерб тактильным ощущениям благодаря специально разработанным переключателям Gateron Low Profile. Клавиатура поддерживает как проводное, так и беспроводное подключение.',
      specifications: {
        'Переключатели': 'Gateron Low Profile',
        'Подключение': 'Bluetooth 5.1 / USB-C',
        'Время работы': 'До 240 часов',
        'Подсветка': 'RGB с 18 эффектами',
        'Совместимость': 'Windows/macOS/Linux',
        'Размер': '75%',
        'Материал': 'Алюминиевая рамка'
      },
      comments: 78
    },
    {
      id: 4,
      title: 'Razer DeathAdder V3',
      category: 'mouse',
      rating: 4.5,
      reviews: 312,
      likes: 287,
      image: '/placeholder.svg',
      author: 'ProGamer2024',
      description: 'Эргономичная игровая мышь для правшей',
      tags: ['Эргономичная', '30000 DPI', 'Chroma RGB'],
      videoId: 'dQw4w9WgXcQ',
      fullDescription: 'Razer DeathAdder V3 — это эволюция легендарной эргономичной формы, которая завоевала сердца миллионов геймеров по всему миру. Новое поколение оснащено инновационными оптическими переключателями Razer, которые обеспечивают молниеносный отклик и невероятную долговечность до 90 миллионов кликов.',
      specifications: {
        'Сенсор': 'Focus Pro 30K',
        'DPI': 'До 30,000',
        'Переключатели': 'Razer Optical Mouse Switch Gen-3',
        'Кнопки': '8 программируемых',
        'Подсветка': 'Razer Chroma RGB',
        'Вес': '59 грамм',
        'Размеры': '127.5 × 61.7 × 42.7 мм'
      },
      comments: 91
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Icon key={i} name="Star" size={16} className="fill-gaming-orange text-gaming-orange" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Icon key={i} name="StarHalf" size={16} className="fill-gaming-orange text-gaming-orange" />);
      } else {
        stars.push(<Icon key={i} name="Star" size={16} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gaming-gray">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gaming-navy">
                🎮 TechReviews
              </h1>
              <div className="hidden md:flex items-center space-x-1">
                <Badge variant="secondary" className="bg-gaming-cyan text-white">
                  Онлайн: 1,247
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} className="mr-2" />
                Поиск
              </Button>
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gaming-orange text-white">У</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gaming-orange to-gaming-cyan rounded-xl p-8 mb-8 text-white animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Форум TechReviews
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Честные обзоры, видео-тесты и обсуждения периферии от сообщества
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-gaming-navy hover:bg-gray-100">
              <Icon name="Video" size={16} className="mr-2" />
              Создать обзор
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gaming-navy">
              <Icon name="Users" size={16} className="mr-2" />
              Присоединиться
            </Button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id 
                    ? "bg-gaming-orange hover:bg-gaming-orange/90" 
                    : "hover:bg-gaming-orange/10"
                } transition-all duration-200 animate-scale-in`}
              >
                <Icon name={category.icon as any} size={16} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-gaming-navy mb-2">
                      {product.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-sm font-medium text-gaming-navy">
                        {product.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({product.reviews} отзывов)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gaming-orange">
                      <Icon name="Heart" size={16} />
                      <span className="font-semibold">{product.likes}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs bg-gaming-cyan text-white">
                        {product.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">
                      {product.author}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="MessageCircle" size={14} className="mr-1" />
                      {product.comments}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="h-8">
                          <Icon name="FileText" size={14} className="mr-1" />
                          Статья
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-gaming-navy">{product.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          {/* Product Image */}
                          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                            <Icon name="Image" size={64} className="text-gray-400" />
                          </div>
                          
                          {/* Product Info */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center">
                                {renderStars(product.rating)}
                                <span className="ml-2 font-semibold text-gaming-navy">{product.rating}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gaming-orange">
                                <Icon name="Heart" size={16} />
                                <span>{product.likes} лайков</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Icon name="MessageCircle" size={16} />
                                <span>{product.comments} комментариев</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {product.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            {/* Description */}
                            <div>
                              <h3 className="text-xl font-semibold text-gaming-navy mb-3">Описание</h3>
                              <p className="text-gray-700 leading-relaxed">
                                {product.fullDescription}
                              </p>
                            </div>
                            
                            {/* Specifications */}
                            <div>
                              <h3 className="text-xl font-semibold text-gaming-navy mb-3">Характеристики</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                  <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <span className="font-medium text-gray-900">{key}:</span>
                                    <span className="text-gray-700">{value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <Separator />
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarFallback className="bg-gaming-cyan text-white">
                                    {product.author[0]}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium text-gaming-navy">{product.author}</div>
                                  <div className="text-sm text-gray-500">Автор статьи</div>
                                </div>
                              </div>
                              
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Icon name="Heart" size={16} className="mr-2" />
                                  Лайк
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Icon name="Share" size={16} className="mr-2" />
                                  Поделиться
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="h-8 bg-gaming-orange hover:bg-gaming-orange/90">
                          <Icon name="Play" size={14} className="mr-1" />
                          Обзор
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-gaming-navy">{product.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          {/* Video Section */}
                          <div className="aspect-video bg-black rounded-lg overflow-hidden">
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${product.videoId}`}
                              title={product.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          
                          {/* Review Content */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center">
                                {renderStars(product.rating)}
                                <span className="ml-2 font-semibold text-gaming-navy">{product.rating}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gaming-orange">
                                <Icon name="Heart" size={16} />
                                <span>{product.likes} лайков</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Icon name="MessageCircle" size={16} />
                                <span>{product.comments} комментариев</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {product.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="prose max-w-none">
                              <h3 className="text-xl font-semibold text-gaming-navy mb-3">Видео обзор</h3>
                              <p className="text-gray-700 leading-relaxed">
                                В этом подробном видео обзоре мы тестируем {product.title} в различных сценариях использования. Смотрите реальные тесты производительности, сравнения с конкурентами и честную оценку плюсов и минусов.
                              </p>
                            </div>
                            
                            <Separator />
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarFallback className="bg-gaming-cyan text-white">
                                    {product.author[0]}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium text-gaming-navy">{product.author}</div>
                                  <div className="text-sm text-gray-500">Автор обзора</div>
                                </div>
                              </div>
                              
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Icon name="Heart" size={16} className="mr-2" />
                                  Лайк
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Icon name="Share" size={16} className="mr-2" />
                                  Поделиться
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-gaming-orange mb-1">2,847</div>
            <div className="text-sm text-gray-600">Участников</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-gaming-cyan mb-1">1,234</div>
            <div className="text-sm text-gray-600">Видео обзоров</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-gaming-orange mb-1">567</div>
            <div className="text-sm text-gray-600">Тем обсуждений</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-gaming-cyan mb-1">8,945</div>
            <div className="text-sm text-gray-600">Комментариев</div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-gaming-navy">
              <Icon name="Activity" size={20} className="mr-2" />
              Последняя активность
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: 'ProGamer2024', action: 'добавил видео обзор', item: 'Razer DeathAdder V3', time: '2 мин назад' },
                { user: 'KeyboardMaster', action: 'создал тему', item: 'Keychron K3 vs Logitech MX Keys', time: '15 мин назад' },
                { user: 'AudioExpert', action: 'ответил в теме', item: 'SteelSeries Arctis Pro', time: '1 час назад' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-gaming-navy text-white text-xs">
                      {activity.user[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <span className="text-sm">
                      <span className="font-medium text-gaming-navy">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="font-medium text-gaming-orange">{activity.item}</span>
                    </span>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;