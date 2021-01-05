<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Recipe;

class TestScript extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:script';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Playground for testing scripts';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $recipe = new Recipe;
        $name = "Beef Stew";
        $cook_time = 30;
        $prep_time = 10;

        $recipe->name = $name;
        $recipe->cook_time = $cook_time;
        $recipe->prep_time = $prep_time;
        $recipe->save();

        echo "Inserting $name", PHP_EOL;

        $recipe = new Recipe;
        $name = "Korean Beef Bibimbap";
        $cook_time = 20;
        $prep_time = 4;

        $recipe->name = $name;
        $recipe->cook_time = $cook_time;
        $recipe->prep_time = $prep_time;
        $recipe->save();

        echo "Inserting $name", PHP_EOL;
        return 0;
    }
}
