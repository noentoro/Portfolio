<?php

namespace App\Corcel\Acf\Field;

use App\Corcel\Acf\FieldInterface;
use App\Corcel\Models\Post;

/**
 * Class PostObject.
 *
 * @author Junior Grossi <juniorgro@gmail.com>
 */
class PostObject extends BasicField implements FieldInterface
{
    /**
     * @var Post
     */
    protected $object;

    /**
     * @param string $fieldName
     */
    public function process($fieldName)
    {
        $postId = $this->fetchValue($fieldName);
        $connection = $this->post->getConnectionName();

        if (is_array($postId)) {
            $this->object = Post::on($connection)->whereIn('ID', $postId)->get()->sortBy(function ($item) use ($postId) {
                return array_search($item->getKey(), $postId);
            });
        } else {
            $this->object = Post::on($connection)->find($postId);
        }
    }

    /**
     * @return mixed
     */
    public function get()
    {
        return $this->object;
    }
}
