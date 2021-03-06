<?php

namespace App\Corcel\Concerns;

use App\Corcel\Acf\AdvancedCustomFields as BaseAdvancedCustomFields;

/**
 * Trait HasAcfFields
 *
 * @package Corcel\Traits
 * @author Junior Grossi <juniorgro@gmail.com>
 */
trait AdvancedCustomFields
{
    /**
     * @return AdvancedCustomFields
     */
    public function getAcfAttribute()
    {
        return new BaseAdvancedCustomFields($this);
    }
}
