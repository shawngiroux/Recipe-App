<!DOCTYPE html>
<html lang="en" class="h-full w-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer></script>
    <title>Recipe App</title>
</head>
<body class="antialiased h-full w-full">
    <div class="lg:flex h-full w-full">
        <x-sidebar></x-sidebar>
        <div class="bg-blue-50 h-full w-full">
            @foreach ($recipes as $recipe)
                <x-recipe :name="$recipe['name']"
                        :cook_time="$recipe['cook_time']"
                        :prep_time="$recipe['prep_time']"
                />
            @endforeach
        </div>
    </div>
</body>
<script>
    console.log(@json($recipes));
</script>
</html>
