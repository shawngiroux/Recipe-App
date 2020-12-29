<?php

namespace App\View\Components;

use Illuminate\View\Component;

class recipe extends Component
{
    /**
     * Name of recipe
     *
     * @var string
     */
    public $name;

    /**
     * Time to cook recipe
     *
     * @var int
     */
    public $cookTime;

    /**
     * Time to prep recipe
     *
     * @var int
     */
    public $prepTime;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($name, $cookTime, $prepTime)
    {
        $this->name = $name;
        $this->cook_time = $cook_time;
        $this->prep_time = $prep_time;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.recipe');
    }
}
