export let questions = [
  {
    question: "Объясните делегирование событий.",
    answer:
      "В случае, когда нам нужно обработать событие на нескольких элементах, имеющих общего предка мы «вешаем» слушатель не на элементы, а на предка. После, с помощью event.target, мы можем получить конкретный элемент, на котором было совершено целевое событие и обработать его.",
  },
  {
    question:
      "Объясните, как this работает в JavaScript? Можете ли вы привести пример одного из способов работы с this, которая изменилась в ES6?",
    answer:
      "this — ссылка на объект в контексте которого выполняется функция. Другими словами, если внутри функции есть обращение типа this.имя_свойства это значит, что мы обращаемся к свойству объекта в контексте которого эта функция выполняется. Этот механизм позволяет писать функции, которые легко переиспользовать в дальнейшем. Судите сами:",
  },
  {
    question: "Объясните, как работает прототипное наследование.",
    answer:
      "В плане наследования JavaScript работает лишь с одной сущностью: объектами. Каждый объект имеет внутреннюю ссылку на другой объект, называемый его прототипом. У объекта-прототипа также есть свой собственный прототип и так далее до тех пор, пока цепочка не завершится объектом, у которого свойство prototype равно null. По определению, null не имеет прототипа и является завершающим звеном в цепочке прототипов. При попытке получить доступ к какому-либо свойству объекта, свойство вначале ищется в самом объекте, затем в цепочке прототипов. Поиск ведется до тех пор, пока не найдено свойство с совпадающим именем или не достигнут конец цепочки прототипов.",
  },
  {
    question:
      "В чем разница между значениями: null, undefined или undeclared? Как бы вы реализовали проверку на эти значения?",
    answer:
      "null — пустое значение, undefined — неопределенное значение, undeclared — переменная не была объявлена, вызов ее вызовет ошибку, вызов typeof покажет undefined (для реализации проверки)",
  },
  {
    question: "Что такое замыкание и как/почему вы его используете?",
    answer:
      "Замыкание — прием при котором функция имеет доступ к лексической области видимости своей функции-обертки, которая была выполнена ранее, но не может быть высвобождена из памяти из-за того, что ее собственная область видимости еще используется другой функцией.",
  },
  {
    question:
      "Какие языковые конструкции вы используете для перебора свойств объекта и элементов массива?",
    answer:
      "Для перебора всех (собственных и унаследованных) свойств объекта используется цикл for..in. Для простого перебора элементов массива чаще всего используется функция Array.forEach().",
  },
  {
    question:
      "Можете ли вы описать основную разницу между циклом Array.forEach() и методами Array.map() и почему вы должны выбрать один, а не другой?",
    answer:
      "Метод Array.forEach() перебирает все элемента массива и для каждого вызывает переданную в forEach callback функцию. После отработки ничего не возвращает, при изменении элемента массива в callback функции изменения отражаются в исходном массиве. Array.map() перебирает все элемента массива и для каждого вызывает переданную в forEach callback функцию. После отработки возвращает новый массив, равный по длине исходному, который содержит в себе преобразованные элементы массива. При изменении элемента массива в callback функции изменения не отражаются в исходном массиве.",
  },
  {
    question: "Каков типичный вариант использования анонимных функций?",
    answer:
      "Анонимными называются функции, которые не имеют собственного имени, как следствие, их нельзя сначала объявить, а потом вызвать. Чаще всего такие функции используют в качестве callback функций.",
  },
  {
    question: "В чем разница между хост-объектами и собственными объектами?",
    answer:
      "Native objects — объекты определенные спецификацией ECMAScript, например, Object (constructor), Date, Math. Host objects— объекты, чья роль заключается в создании исполнительного окружения для ECMAScript, например, window, document, location, history.",
  },
  {
    question:
      "Объясните разницу между: function Person(){}, var person = Person() и var person = new Person()?",
    answer: "",
  },
  {
    question:
      "Объясните разницу в использовании foo между function foo() {} и var foo = function() {}",
    answer:
      "По сути, они делают одно и тоже, но функции, объявленные как Function Declaration могут быть вызваны раньше их места объявления в коде (hoisting), а Function Expression нет.",
  },
  {
    question:
      "Можете ли вы объяснить, что делают Function.call и Function.apply? В чем заметная разница между ними?",
    answer:
      "Оба метода используются для указания контекста, при вызове функции, к которой применяются. Отличаются синтаксисом, apply более гибкая.",
  },
  {
    question: "Объясните Function.prototype.bind.",
    answer:
      "Function.prototype.bind — создает новую функцию, которая при вызове устанавливает в качестве контекста выполнения (this) предоставленное значение, т.е отвечает за вызов функций с другим контекстом.",
  },
  {
    question:
      "В чем разница между обнаружением функций, выводом функций и использованием строки UA?",
    answer:
      "Feature detection, feature inference и User Agent String — это практики определения, существует ли определенная функция веб-технологии в браузере. Feature detection — это способ определить, существует ли функция в определенных браузерах. Feature inference — предположение: если одна функция присутствует (или нет), соответственно другая тоже будет присутствовать (или нет). User Agent String — это текстовая строка, которую отправляет каждый браузер и к которой можно получить доступ через navigator.userAgent. Эта строка содержит в себе информацию о исполнительном окружении.",
  },
  {
    question: "Объясните hoisting.",
    answer:
      "Во время компиляции кода, объявления некоторых переменных и функций поднимаются выше остального кода в пределах своей области видимости. Этот процесс и называется hoisting. Благодаря нему, функция будет успешно вызвана несмотря на то, что в коде ее вызов может идти перед объявлением.",
  },
  {
    question: "Опишите погружение и всплытие событий.",
    answer:
      "Погружение и всплытие — это фазы жизненного цикла события. Разница заключается в моменте определения факта наступления события. Изначально, при взаимодействии юзера с элементом интерфейса (клик на кнопку, например) событие погружается от объекта window к целевому элементу (target), после наступает стадия всплытия и событие всплывает от target обратно к window. Так, одно и то же событие может быть перехвачено раньше или позже.",
  },
  {
    question: "Опишите перехват событий.",
    answer:
      "Для остановки всплытия нужно вызвать метод event.stopPropagation().",
  },
  {
    question: "В чем разница между «атрибутом» и «свойством»?",
    answer:
      "Атрибуты – это то, что написано в HTML. Свойства – это то, что находится в DOM-объектах.",
  },
  {
    question:
      "Каковы плюсы и минусы расширения встроенных объектов JavaScript?",
    answer:
      "Плюсом данного подхода является расширение базового функционала объекта. Прием может быть применен при определении полифилов. В общем случае, расширение поведения встроенных объектов не приветствуется и является плохой практикой (monkey patching). Это нарушает принцип инкапсуляции и засоряет базовые объекты не задокументированной функциональностью.",
  },
  {
    question: "Какая разница между == и ===?",
    answer:
      "Оба оператора сравнения проверяют тождественность. Различие заключается в том, что двойное равно при сравнении значений неявно приводит (преобразует) типы значений к единому, так строка “1” и цифра 1 при таком сравнении будут равны. Тройное равно не выполняет никаких неявных трансформаций, а значит исходные типы будут иметь значения. Таким образом строка не будет равна числу и не важно что в обоих операндах фигурирует единица.",
  },
  {
    question: "Объясните Same-origin policy в отношении JavaScript.",
    answer:
      "Same-origin policy (политика одинакового источника) — определяет как сайт (документ/скрипт), загруженный из одного источника может взаимодействовать в браузере с ресурсом (файлом, скриптом, объектом), из другого источника. Пример: Если скрипт нашего сайта делает простой запрос (GET) к чужому серверу и получает в ответ файл, при этом в ответе отсутствует заголовок Access-Control-Allow-Origin или в значении этого заголовка отсутствует наш домен, браузер запретит доступ к этому файлу (не даст посмотреть содержимое ответа) из скриптов нашего сайта.",
  },
  {
    question:
      "Почему он называется Тернарным оператором, что означает слово «Тернарный»?",
    answer:
      "Тернарный оператор — это условный оператор, имеющий форму записи: <условие> ? <истинное выражение> : <ложное выражение>. Тернарным его называют потому, что он имеет три операнда.",
  },
  {
    question:
      "Что такое строгий режим? Каковы некоторые преимущества / недостатки его использования?",
    answer:
      "Strict (строгий режим)— особый режим работы компилятора, включающий в себя новые возможности и некоторые улучшения обусловленные стандартом ECMAScript 5, при котором изменяется поведение некоторых функций. Включается директивой ‘use strict’. Большинство современных браузеров поддерживают strict режим, однако не все это делают полностью. Также не стоит забывать о более старых версиях (IE ниже версии 10). Строгий режим изменяет семантику, что приводит к погрешностям и ошибкам. Нужно подходить очень внимательно к использованию строго режима и проводить тесты для проверки работоспособности кода как в браузерах, которые поддерживают строгий режим, так и в тех, которые не поддерживают.",
  },
  {
    question:
      "Каковы некоторые преимущества/недостатки написания кода JavaScript на языке, который компилируется в JavaScript?",
    answer:
      "TypeScript — один из языков, который позволяет писать код, компилируемый в JS. Среди его преимуществ стоит отметить: Поддержка популярными IDE: Sublime Text, Visual Studio Code, WebStorm, Eclipse. Реализует многие принципы объектно-ориентированного программирования: модификаторы доступа, наследование, инкапсуляцию и полиморфизм. Позволяет быстрее и проще писать сложные решения, которые легче тестировать и развивать благодаря поддержки ООП и строгой типизации. Есть система для работы с модулями, классами. Даже есть возможность создавать абстрактные классы. TypeScript обратно совместим с JavaScript. Любой код, написанный на JS будет выполнен. Также можно писать смешанный код и он будет валиден. Недостатки: Наличие дополнительных файлов (*.ts, *.d.ts, *.map), что неудобно для небольших проектов. Для некоторых браузеров необходима дополнительная настройка консоли для отладки TypeScript. TypeScript — язык с неявной статической типизацией: тип может быть описан как any, что отключит приведение к этому типу переменной. d.ts декларации не всегда соответствуют текущей версии библиотеки. В целом — TypeScript отличный выбор для крупных проектов, поскольку написание занимает больше времени из-за описания деклараций классов и методов. В отсутствии статической типизации в JavaScript, TypeScript — отличное решение.",
  },
  {
    question:
      "Какие инструменты и методы вы используете для отладки кода JavaScript?",
    answer: "",
  },
  {
    question:
      "Объясните разницу между изменяемым и неизменяемым объектом. Что является примером неизменяемого объекта в JavaScript? Каковы плюсы и минусы неизменности? Как добиться неизменности в собственном коде?",
    answer:
      "Immutable объект — неизменяемый. Объект, состояние которого не может быть изменено после создания. Соответственно, mutable объект может быть изменен после создания. Все примитивы (числа, строки, булевые значения и т.п.) имутабельны. Преимущества immutability: Простое и быстрое отслеживание изменений (например, не нужно отдельно сравнивать значения каждого поля вложенного объекта. Можно просто сравнить ссылки на объекты и отсеять вложенные ветки сравнений). Более безопасное использование и тестирование. Недостатки: Создание нового объекта при каждом изменении может стать ресурсо-затратной операцией. Использование метода Object.freeze() предотвращает изменение объекта: добавление, удаление или изменение свойств. Использование ключевого слова const вместо var или let не делает константу неизменной, однако предотвращает повторное присваивание нового значения.",
  },
  {
    question: "Объясните разницу между синхронными и асинхронными функциями.",
    answer:
      "Синхронные функции — выполняются в том порядке, в котором они написаны в тексте, по очереди. Асинхронные функции — выполняются отложено, попадая перед выполнением в очередь, что позволяет выполнить их не блокируя основной поток.",
  },
  {
    question:
      "Что такое цикл событий? В чем разница между стеком вызовов и очередью задач?",
    answer:
      "Task queue — очередь из завершенных асинхронных задач готовых к синхронной обработке. Из этой очереди задачи будут постепенно перемещены в call stack. Сall stack — стек вызовов по которому можно определить в каком месте программы сейчас идет ее обработка. Если стек не пуст, значит идет выполнение синхронных задач, а именно, функции, которая находится на верхушке стека. Event loop — механизм перемещающий готовые к синхронной обработке асинхронные задачи из task queue в call stack.",
  },
  {
    question:
      "В чем разница между переменными, созданными с помощью let, var или const?",
    answer:
      "const — переменным объявленным этим оператором должно быть сразу же присвоено значение. В дальнейшем значение не может быть переопределено. Переменная объявленная таким способом не будет видна за пределами блочной области видимости. let — значение переменной объявленной этим оператором может быть установлено позже, а так же может быть переопределено в будущем. Переменная объявленная таким способом не будет видна за пределами блочной области видимости. Не доступен hoisting. Не поддерживает повторное объявление. var — значение переменной объявленной этим оператором может быть установлено позже, а так же может быть переопределено в будущем. Переменная объявленная таким способом видна за пределами блочной области видимости. Доступен hoisting. Поддерживает повторное объявление.",
  },
  {
    question: "В чем разница между классом ES6 и конструкторами функций ES5?",
    answer:
      "Методы класса являются неперечислимыми свойствами. Код внутри класса по умолчанию обрабатывается в строгом режиме. Есть различия в синтаксисе.",
  },
  {
    question:
      "Можете ли вы предложить вариант использования нового синтаксиса arrow function =>? Чем этот новый синтаксис отличается от других функций?",
    answer:
      "Стрелочные функции объявляются особой комбинацией символов () => {}. Пожалуй, наиболее уместным вариантом применения стрелочной функций является применение ее как callback функции. Это объясняется основным отличием ее от других типов функций — контекст выполнения стрелочных функций определяется не в момент вызова, а в момент ее объявления (лексический this).",
  },
  {
    question: "Как определяется функция высшего порядка?",
    answer:
      "Стрелочные функции объявляются особой комбинацией символов () => {}. Пожалуй, наиболее уместным вариантом применения стрелочной функций является применение ее как callback функции. Это объясняется основным отличием ее от других типов функций — контекст выполнения стрелочных функций определяется не в момент вызова, а в момент ее объявления (лексический this).",
  },
  {
    question:
      "Можете ли вы привести пример деструктуризации объекта или массива?",
    answer:
      "Destructuring assignment — механизм извлечения данных из массивов и объектов. При этом используются литералы массива или объекта (в зависимости от того, что разбираем), что увеличивает читабельность и позволяет сразу сказать объект какого типа деструктурируется. Например: var [firstItem] = arr;",
  },
  {
    question:
      "Можете ли вы привести пример curry function и почему этот синтаксис дает преимущество?",
    answer:
      "Каррирование (currying) — преобразование функций с множеством аргументов в набор вложенных функций с одним аргументом. После вызова такой функции с передачей ей аргумента, она возвращает новую функцию, ожидающую следующего аргумента и так до получения результата.",
  },
  {
    question:
      "Каковы преимущества использования синтаксиса spread и чем он отличается от синтаксиса rest?",
    answer:
      "Spread — оператор состоящий из трех точек. Преимущество — в короткой форме записи. Отличие — в зависимости от места применения этот оператор трактуется как spread или rest оператор. Rest используется для деструктуризации коллекций (разделение на отдельные элементы), а spread, наоборот, для соединения отдельных значений в массив.",
  },
  {
    question: "В чем разница между циклами while и do-while в JavaScript?",
    answer:
      "while – Проверяет условие перед каждой итерацией. do..while – Проверяет условие после каждой итерации.",
  },
  {
    question: "Что такое promise? Где и как вы бы использовали promise?",
    answer:
      "это объект, представляющий результат успешного или неудачного завершения асинхронной операции. Используется когда функцию нужно вызвать асинхронно",
  },
  {
    question:
      "Обсудите, как вы можете использовать принципы объектно-ориентированного программирования при кодировании с помощью JavaScript.",
    answer:
      "1.Абстракция. Моделирование требуемых атрибутов и взаимодействий сущностей в виде классов для определения абстрактного представления системы. 2.Инкапсуляция. 3.Наследование. 4.Полиморфизм.",
  },
  {
    question: "Из чего состоит html документ?",
    answer:
      "HTML-страница состоит как минимум из трёх тегов: <html> , <head> и <body> . Тег <head> обычно содержит заголовок, ключевые слова, описание страницы и другие служебные данные. Также внутри него подключаются внешние ресурсы, например, стили. Содержимое этого тега не отображается на странице напрямую.",
  },
  {
    question: "Что такое html тег?",
    answer:
      "Корневой тег, который сообщает браузеру, что это HTML-документ. Все остальные элементы помещаются внутри него. <head></head> — контейнер, в который помещаются метаданные документа, не видимые пользователям, но считываемые поисковыми роботами: например, <title> или <style>. <body></body> - я отрисовки сайта",
  },
  {
    question: "Из чего состоит css документ?",
    answer: "селектор { свойство: значение; } пример: p { color: black; }",
  },
  {
    question: "Какой Приоритет Селекторов? ",
    answer:
      "Селектор по тегу: 1, Селектор по классу: 10, Селектор по ID: 100, Стиль в атрибуте тега: 1000",
  },
  {
    question: "Что такое FlexBox?",
    answer:
      "Это технология для создания сложных гибких макетов за счёт правильного размещения элементов на странице.",
  },
  {
    question: "Какие виды типы данных бывают?",
    answer: "null, undefined, boolean, number, string, object, symbol, BigInt.",
  },
  {
    question: "Разница ES6 и ES7?",
    answer:
      "ES5,ES6,ES7 это просто апдейты Java Script корые просто меняют синтаксис для более удобной работы.",
  },
  {
    question: "Что делает метод render() в react?",
    answer:
      "Метод render() используется в библиотеке React для отображения компонента на странице. Он возвращает React-элемент, который описывает, как должен выглядеть компонент на странице. Рендерится каждый раз когда меняется елемент и возвращает последнюю отрисовку компанента. Для этого он использует JSX-синтаксис - это расширение синтаксиса JavaScript, которое позволяет писать HTML-подобный код внутри JavaScript.",
  },
  {
    question: "Что такое AJAX?",
    answer:
      "Метод который позволяет обмениваться данными между браузером и сервером не перезогружая страницу.",
  },
  {
    question: "Что такое функция генератор?",
    answer:
      "Генераторы – новый вид функций в современном JavaScript. Они отличаются от обычных тем, что могут приостанавливать своё выполнение, возвращать промежуточный результат и далее возобновлять его позже, в произвольный момент времени. Это функция порционно выдает результат.",
  },
  {
    question: "Что такое async/defer и в чем разница?",
    answer:
      "Это атрибуты, defer сохраняет относительную последовательность скриптов, а async – нет. Кроме того, defer всегда ждёт, пока весь HTML-документ будет готов, а async – нет.",
  },
  {
    question: "Что такое Map() и Set()?",
    answer:
      "Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа. Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.",
  },
  {
    question: "Что такое алгоритм?",
    answer:
      "Это набор последовательных действий, который решает какую-то задачу. Оценивается по сложности и скорости, такая оценка описывается как О-большое",
  },
  {
    question: "Что такое жизненные циклы?",
    answer:
      "Методы жизненного цикла дают возможность запускать код в конкретные моменты жизни компонента либо в ответ на какие-нибудь изменения.",
  },
  {
    question: "Что такое useDispatch?",
    answer:
      "Это функция которая помогает менять состояние. Она передает action(елемент который мы хотим изменить в состоянии) в Reducer, на этом ее функция заканчивается.",
  },
  {
    question: "Что такое action в Redux?",
    answer: "Это набор действий по изменению данных.",
  },
  {
    question: "Что такое Reducer в Redux?",
    answer:
      "Это чистая функция которая принимает state и action и в зависимости от action изменяет state и возвращает нам его в обновленном виде.",
  },
  {
    question: "Что такое React?",
    answer:
      "Это JavaScript библиотека для более удобной разработки пользовательских интерфейсов.",
  },
  {
    question: "Что такок REST API?",
    answer:
      "Это способ взаимодействия сайтов и веб-приложений с сервером. API (Application Programming Interface) — это код, который позволяет двум приложениям обмениваться данными с сервера.",
  },
  {
    question: "Разкажите про useEffect, useCallbeck, useMemo, useRef?",
    answer:
      "useEffect работает с жизнеными циклами компонента, useRef позволяет ссылаться на значение, которое не нужно для рендеринга, useMemo занимается киированием, он сохраняет результат вызова функции и пересчитывает его только при изменении зависимостей, useCallback похож на useMemo только кэширует саму функцию, так что handleSubmit сама по себе не изменяется, если только productId или referrer не изменилисью.",
  },
];
