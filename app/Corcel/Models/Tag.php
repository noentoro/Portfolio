<?php

namespace App\Corcel\Models;

/**
 * Tag class.
 *
 * @package Corcel\Model
 * @author Mickael Burguet <www.rundef.com>
 */
class Tag extends Taxonomy
{
    /**
     * @var string
     */
    protected $taxonomy = 'post_tag';
}
