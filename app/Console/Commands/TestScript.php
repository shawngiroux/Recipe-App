<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Recipes;

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
        $recipes = new Recipe;
        $name = "Beef Stew";
        $recipes->name = $name;
        $recipes->save();
        echo "Inserting $name", PHP_EOL;
        return 0;
    }
}
